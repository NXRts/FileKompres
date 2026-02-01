import imageCompression from "browser-image-compression";
import { PDFDocument } from "pdf-lib";

export interface CompressedResult {
    file: File;
    originalSize: number;
    compressedSize: number;
    type: string;
}

export interface CompressionOptions {
    maxSizeMB: number;
    maxWidthOrHeight?: number;
    useWebWorker?: boolean;
}

/**
 * Handles image compression using browser-image-compression
 */
export async function compressImage(file: File, targetSizeKB: number): Promise<File> {
    const maxSizeMB = targetSizeKB / 1024;

    const options = {
        maxSizeMB: maxSizeMB,
        maxWidthOrHeight: 1920, // Reasonable default for web
        useWebWorker: true,
        fileType: file.type as string,
        initialQuality: 0.8, // Start with high quality
    };

    try {
        const compressedFile = await imageCompression(file, options);

        // Correction: if the "compressed" file is somehow larger (rare but happens with already optimized images), return original
        if (compressedFile.size > file.size) {
            return file;
        }

        return compressedFile;
    } catch (error) {
        console.error("Image compression error:", error);
        throw new Error("Failed to compress image");
    }
}

/**
 * Handles basic PDF optimization (re-saving)
 * Note: Browser-side true PDF compression is limited. We can try to re-save it which sometimes removes metadata or cleans structure.
 * For advanced compression, we would need ghostscript-wasm or similar heavy tools.
 */
export async function compressPDF(file: File): Promise<File> {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);

        // Saving with 'useObjectStreams: false' sometimes increases size, but default save can optimize XRef table
        // Unfortunately pdf-lib doesn't have "downsample images" feature easily available without extracting and re-embedding.
        // We will perform a "clean save" which often reduces size if the PDF has garbage data.
        const pdfBytes = await pdfDoc.save();

        const compressedBlob = new Blob([pdfBytes as any], { type: "application/pdf" });

        // If we didn't save space, return original
        if (compressedBlob.size >= file.size) {
            return file;
        }

        return new File([compressedBlob], file.name, { type: "application/pdf", lastModified: Date.now() });
    } catch (error) {
        console.warn("PDF compression failed or not effective, returning original.", error);
        return file;
    }
}

export async function processFile(file: File, targetSizeKB: number): Promise<CompressedResult> {
    let resultFile = file;

    if (file.type.startsWith("image/")) {
        resultFile = await compressImage(file, targetSizeKB);
    } else if (file.type === "application/pdf") {
        // Attempt PDF compression
        resultFile = await compressPDF(file);
    }
    // Generic files are returned as-is (passed through) but available for zipping

    return {
        file: resultFile,
        originalSize: file.size,
        compressedSize: resultFile.size,
        type: file.type,
    };
}

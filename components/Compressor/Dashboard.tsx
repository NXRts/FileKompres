"use client";

import React, { useState } from "react";
import JSZip from "jszip";
// import { v4 as uuidv4 } from "uuid";
import { Dropzone } from "@/components/ui/Dropzone";
import { ConfigurationPanel } from "./ConfigurationPanel";
import { FileTable } from "./FileTable";
import { processFile } from "@/lib/compressor";
import { Button } from "@/components/ui/Button";
import { DownloadCloud, Trash2 } from "lucide-react";
import { wait } from "@/lib/utils";

// Simple ID generator if uuid not available
const generateId = () => Math.random().toString(36).substring(2, 9);

interface FileItem {
    id: string;
    file: File;
    status: 'pending' | 'processing' | 'done' | 'error';
    originalSize: number;
    compressedSize?: number;
    compressedFile?: File;
}

export default function Dashboard() {
    const [files, setFiles] = useState<FileItem[]>([]);
    const [targetSize, setTargetSize] = useState(300);
    const [unit, setUnit] = useState<'KB' | 'MB'>('KB');
    const [isGlobalProcessing, setIsGlobalProcessing] = useState(false);

    const handleFilesDropped = async (droppedFiles: File[]) => {
        // Deduplicate or just add unique IDs
        const newFiles = droppedFiles.map((file) => ({
            id: generateId(),
            file,
            status: 'pending' as const,
            originalSize: file.size,
        }));

        setFiles((prev) => [...prev, ...newFiles]);

        // Auto start processing
        await processFilesQueue(newFiles);
    };

    const processFilesQueue = async (queue: FileItem[]) => {
        setIsGlobalProcessing(true);

        // Convert target size to KB for the internal logic
        const effectiveTargetSizeKB = unit === 'MB' ? targetSize * 1024 : targetSize;

        for (const item of queue) {
            setFiles((prev) => prev.map(f => f.id === item.id ? { ...f, status: 'processing' } : f));

            // Non-blocking UI delay for visual smoothness
            await wait(300);

            try {
                // Process
                const result = await processFile(item.file, effectiveTargetSizeKB);

                setFiles((prev) => prev.map(f => f.id === item.id ? {
                    ...f,
                    status: 'done',
                    compressedSize: result.compressedSize,
                    compressedFile: result.file
                } : f));

            } catch (error) {
                console.error("Error processing file", item.file.name, error);
                setFiles((prev) => prev.map(f => f.id === item.id ? { ...f, status: 'error' } : f));
            }
        }

        setIsGlobalProcessing(false);
    };

    const handleDownload = (file: File) => {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name; // Logic often adds prefix, but user requirement didn't specify. Keeping original name mostly desirable or maybe prefix?
        // Let's prepend "compressed_" if it's different to distinguish? 
        // Actually, users usually prefer same name if organizing into new folders, or new name if same folder.
        // Let's prepend to be safe.
        link.download = `min_${file.name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleDownloadAll = async () => {
        const zip = new JSZip();
        const completedFiles = files.filter(f => f.status === 'done' && f.compressedFile);

        if (completedFiles.length === 0) return;

        completedFiles.forEach(f => {
            if (f.compressedFile) {
                zip.file(f.compressedFile.name, f.compressedFile);
            }
        });

        const content = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(content);
        const link = document.createElement("a");
        link.href = url;
        link.download = "compressed_files.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const completedCount = files.filter(f => f.status === 'done').length;

    const handleUnitChange = (newUnit: 'KB' | 'MB') => {
        setUnit(newUnit);
        if (newUnit === 'MB') {
            setTargetSize(2);
        } else {
            setTargetSize(300);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Smart</span> Compressor
                </h1>
                <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
                    Secure, private, and client-side only. Compress images to a specific size, optimize PDFs, and batch process everything in seconds.
                </p>
            </div>

            <ConfigurationPanel
                targetSize={targetSize}
                setTargetSize={setTargetSize}
                unit={unit}
                setUnit={handleUnitChange}
                disabled={isGlobalProcessing || files.some(f => f.status === 'processing')}
            />

            <Dropzone onFilesDropped={handleFilesDropped} isProcessing={isGlobalProcessing} />

            <div className="flex justify-end gap-3 min-h-[40px]">
                {files.length > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setFiles([])}
                        disabled={isGlobalProcessing}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        <Trash2 className="h-4 w-4 mr-2" /> Clear All
                    </Button>
                )}
                {completedCount > 1 && (
                    <Button
                        variant="primary"
                        onClick={handleDownloadAll}
                        className="bg-zinc-100 text-zinc-900 hover:bg-white"
                    >
                        <DownloadCloud className="h-4 w-4 mr-2" /> Download All as ZIP
                    </Button>
                )}
            </div>

            <FileTable
                files={files}
                onRemove={(id) => setFiles(prev => prev.filter(f => f.id !== id))}
                onDownload={handleDownload}
            />
        </div>
    );
}

"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileType } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropzoneProps {
    onFilesDropped: (files: File[]) => void;
    isProcessing: boolean;
    disabled?: boolean;
}

export function Dropzone({ onFilesDropped, isProcessing, disabled }: DropzoneProps) {
    const [error, setError] = React.useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: any[]) => {
            setError(null);
            if (fileRejections.length > 0) {
                // We show the error for the first rejected file
                const rejection = fileRejections[0];
                if (rejection.errors[0]?.code === "file-invalid-type") {
                    setError("File type not supported. Please use JPG, PNG, WEBP, PDF, or Word.");
                } else {
                    setError(rejection.errors[0]?.message || "File upload failed");
                }
            }

            if (acceptedFiles?.length > 0) {
                onFilesDropped(acceptedFiles);
            }
        },
        [onFilesDropped]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        disabled: isProcessing || disabled,
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
            'image/webp': ['.webp'],
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        }
    });

    return (
        <div className="space-y-3">
            <div
                {...getRootProps()}
                className={cn(
                    "relative group cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900/40 transition-all hover:bg-zinc-800/50 hover:border-blue-500/50 select-none",
                    isDragActive && "border-blue-500 bg-blue-500/10 scale-[1.01] shadow-2xl shadow-blue-500/10",
                    isProcessing && "pointer-events-none opacity-50 cursor-default",
                    error && "border-red-500/50 bg-red-500/5"
                )}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center py-12 md:py-16 px-4 text-center space-y-4">
                    <div className="relative">
                        <div className={cn("absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full transition-opacity", isDragActive ? "opacity-40" : "opacity-20", error && "bg-red-500")}></div>
                        <div className={cn("relative bg-zinc-900 p-4 rounded-2xl border border-zinc-700 shadow-xl transition-colors", error && "border-red-500/30")}>
                            <UploadCloud className={cn("h-8 w-8 md:h-10 md:w-10 text-blue-500 transition-transform duration-300", isDragActive && "-translate-y-1", error && "text-red-500")} />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-zinc-100 mb-2">
                            {isDragActive ? "Drop to upload" : "Drag & Drop files here"}
                        </h3>
                        <p className="text-xs md:text-sm text-zinc-400 max-w-sm mx-auto">
                            Support: JPG, PNG, WEBP, PDF, and DOC/DOCX.
                        </p>
                    </div>

                    <div className="flex gap-2 justify-center flex-wrap px-4">
                        {["JPG", "PNG", "WEBP", "PDF", "DOC"].map((ext) => (
                            <span key={ext} className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-[10px] md:text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-700/50">{ext}</span>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-xl bg-red-500/10 text-red-400 text-sm border border-red-500/20">
                            <span className="mr-2">⚠️</span> {error}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

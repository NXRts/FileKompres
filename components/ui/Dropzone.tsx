"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileType } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropzoneProps {
    onFilesDropped: (files: File[]) => void;
    isProcessing: boolean;
}

export function Dropzone({ onFilesDropped, isProcessing }: DropzoneProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles?.length > 0) {
                onFilesDropped(acceptedFiles);
            }
        },
        [onFilesDropped]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        disabled: isProcessing,
    });

    return (
        <div
            {...getRootProps()}
            className={cn(
                "relative group cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900/40 transition-all hover:bg-zinc-800/50 hover:border-blue-500/50",
                isDragActive && "border-blue-500 bg-blue-500/10 scale-[1.01] shadow-2xl shadow-blue-500/10",
                isProcessing && "pointer-events-none opacity-50 cursor-default"
            )}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-4">
                <div className="relative">
                    <div className={cn("absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full transition-opacity", isDragActive ? "opacity-40" : "opacity-20")}></div>
                    <div className="relative bg-zinc-900 p-4 rounded-2xl border border-zinc-700 shadow-xl">
                        <UploadCloud className={cn("h-10 w-10 text-blue-500 transition-transform duration-300", isDragActive && "-translate-y-1")} />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                        {isDragActive ? "Drop files now" : "Drag & Drop files here"}
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                        Support Images, PDFs, and Documents. We compress what we can, and zip everything for you.
                    </p>
                </div>

                <div className="flex gap-2 justify-center flex-wrap">
                    <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-700/50">JPG</span>
                    <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-700/50">PNG</span>
                    <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-700/50">PDF</span>
                    <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-700/50">WEBP</span>
                </div>
            </div>
        </div>
    );
}

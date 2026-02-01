"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileIcon, ImageIcon, CheckCircle2, AlertCircle, Loader2, ArrowRight, Download, FileText } from "lucide-react";
import { formatFileSize, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface FileItem {
    id: string;
    file: File;
    status: 'pending' | 'processing' | 'done' | 'error';
    originalSize: number;
    compressedSize?: number;
    compressedFile?: File;
}

interface FileTableProps {
    files: FileItem[];
    onRemove: (id: string) => void;
    onDownload: (file: File) => void;
    isInvalidConfig?: boolean;
}

export function FileTable({ files, onRemove, onDownload, isInvalidConfig }: FileTableProps) {
    if (files.length === 0) return null;

    return (
        <div className="w-full space-y-3">
            <div className="flex items-center justify-between px-2 pb-2">
                <h4 className="text-sm font-medium text-zinc-400">Processed Files ({files.length})</h4>
            </div>
            <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                    {files.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            layout
                            className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-3 flex items-start md:items-center gap-3 md:gap-4 hover:border-zinc-700 transition-colors group"
                        >
                            {/* Icon */}
                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                                {item.file.type.startsWith('image/') ? (
                                    <ImageIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                                ) : item.file.type === 'application/pdf' ? (
                                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-red-400" />
                                ) : (
                                    <FileIcon className="h-5 w-5 md:h-6 md:w-6 text-zinc-400" />
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center">
                                <div className="min-w-0 flex items-center justify-between md:block">
                                    <div className="min-w-0">
                                        <p className="font-medium text-sm text-zinc-200 truncate" title={item.file.name}>{item.file.name}</p>
                                        <p className="text-[10px] md:text-xs text-zinc-500 uppercase">{item.file.type.split('/')[1] || 'FILE'}</p>
                                    </div>
                                    {/* Mobile: Action button moved here if needed, but keeping it simple for now */}
                                </div>

                                <div className="flex items-center gap-2 text-xs md:text-sm">
                                    <span className="text-zinc-400">{formatFileSize(item.originalSize)}</span>
                                    {item.compressedSize && (
                                        <>
                                            <ArrowRight className="h-3 w-3 text-zinc-600" />
                                            <span className={cn("font-medium",
                                                item.compressedSize < item.originalSize ? "text-green-400" : "text-zinc-300"
                                            )}>
                                                {formatFileSize(item.compressedSize)}
                                            </span>
                                            {item.compressedSize < item.originalSize && (
                                                <span className="text-[10px] md:text-xs text-green-500/80 ml-1">
                                                    (-{Math.round((1 - item.compressedSize / item.originalSize) * 100)}%)
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>

                                <div className="flex justify-end items-center gap-2 mt-1 md:mt-0">
                                    {item.status === 'processing' && (
                                        <span className="flex items-center gap-2 text-[10px] md:text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                                            <Loader2 className="h-3 w-3 animate-spin" /> Compressing
                                        </span>
                                    )}
                                    {item.status === 'done' && (
                                        <div className="relative group/btn">
                                            <Button
                                                size="sm"
                                                variant="primary"
                                                className="h-7 md:h-8 text-xs bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border-0 shadow-none px-2 md:px-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600/20 disabled:hover:text-blue-400"
                                                onClick={() => item.compressedFile && onDownload(item.compressedFile)}
                                                disabled={isInvalidConfig}
                                            >
                                                <Download className="h-3 w-3 mr-1.5" /> Save
                                            </Button>
                                            {isInvalidConfig && (
                                                <div className="absolute bottom-full mb-2 right-0 hidden group-hover/btn:block whitespace-nowrap z-10">
                                                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg">
                                                        Min size is 50KB
                                                        <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-red-500"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {item.status === 'error' && (
                                        <span className="flex items-center gap-2 text-[10px] md:text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
                                            <AlertCircle className="h-3 w-3" /> Error
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

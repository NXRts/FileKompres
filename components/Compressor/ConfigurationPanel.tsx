"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Settings2 } from "lucide-react";

interface ConfigurationPanelProps {
    targetSizeKB: number;
    setTargetSizeKB: (value: number) => void;
    disabled?: boolean;
}

export function ConfigurationPanel({
    targetSizeKB,
    setTargetSizeKB,
    disabled,
}: ConfigurationPanelProps) {
    return (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between backdrop-blur-sm">
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                <div className="p-2 md:p-3 bg-zinc-800 rounded-xl shrink-0">
                    <Settings2 className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                </div>
                <div>
                    <h3 className="text-base md:text-lg font-medium text-zinc-100">Compression Settings</h3>
                    <p className="text-zinc-400 text-xs md:text-sm">Target size for images (others are optimized automatically)</p>
                </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
                <span className="text-sm font-medium text-zinc-300 whitespace-nowrap">Max Size:</span>
                <div className="relative w-24 md:w-full max-w-[150px]">
                    <Input
                        type="number"
                        min={10}
                        value={targetSizeKB}
                        onChange={(e) => setTargetSizeKB(Number(e.target.value))}
                        disabled={disabled}
                        className="pr-10 md:pr-12 font-mono text-center text-base md:text-lg h-10 md:h-12"
                    />
                    <span className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-[10px] md:text-xs font-bold text-zinc-600 pointer-events-none">KB</span>
                </div>
            </div>
        </div>
    );
}

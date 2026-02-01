"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Settings2 } from "lucide-react";

export interface ConfigurationPanelProps {
    targetSize: number;
    setTargetSize: (value: number) => void;
    unit: 'KB' | 'MB';
    setUnit: (value: 'KB' | 'MB') => void;
    disabled?: boolean;
}

export function ConfigurationPanel({
    targetSize,
    setTargetSize,
    unit,
    setUnit,
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
                <div className="relative flex items-center gap-2">
                    <div className="relative w-24 md:w-28">
                        <Input
                            type="number"
                            min={1}
                            value={targetSize}
                            onChange={(e) => setTargetSize(Number(e.target.value))}
                            disabled={disabled}
                            className="font-mono text-center text-base md:text-lg h-10 md:h-12"
                        />
                    </div>
                    <div className="relative">
                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value as 'KB' | 'MB')}
                            disabled={disabled}
                            className="h-10 md:h-12 bg-zinc-800 border-zinc-700 text-zinc-100 text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer hover:bg-zinc-700/80 transition-colors appearance-none pr-8"
                        >
                            <option value="KB">KB</option>
                            <option value="MB">MB</option>
                        </select>
                        <svg className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

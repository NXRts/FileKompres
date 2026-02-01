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
                            max={unit === 'MB' ? 100 : 50000}
                            value={targetSize}
                            onChange={(e) => {
                                let val = e.target.value;
                                if (val.length > 5) return; // Limit char length

                                const numVal = Number(val);
                                if (numVal < 0) return;

                                // Optional: Cap the value directly? 
                                // Let's just trust the user not to type infinity, but the char limit helps.
                                // Or better, let's clamp it if it's too huge on blur, but while typing just limit chars.
                                // 5 chars for KB = 99999KB (~100MB), 5 chars for MB = 99999MB (too big).

                                // Strict logic:
                                if (unit === 'MB' && numVal > 100) return; // Max 100MB
                                if (unit === 'KB' && numVal > 50000) return; // Max 50MB

                                setTargetSize(numVal);
                            }}
                            disabled={disabled}
                            className="font-mono text-center text-base md:text-lg h-10 md:h-12"
                        />
                    </div>
                    <div className="flex bg-zinc-800 p-1 rounded-lg border border-zinc-700 h-10 md:h-12 items-center">
                        <button
                            onClick={() => setUnit('KB')}
                            disabled={disabled}
                            className={`px-3 md:px-4 h-full rounded-md text-xs md:text-sm font-medium transition-all ${unit === 'KB'
                                ? 'bg-zinc-600 text-white shadow-sm'
                                : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            KB
                        </button>
                        <button
                            onClick={() => setUnit('MB')}
                            disabled={disabled}
                            className={`px-3 md:px-4 h-full rounded-md text-xs md:text-sm font-medium transition-all ${unit === 'MB'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            MB
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Sparkles, PlusCircle } from "lucide-react";

const upcomingFeatures = [
    {
        title: "Kompresi PDF",
        desc: "Optimalkan ukuran file PDF tanpa kehilangan keterbacaan teks.",
        status: "Segera Hadir"
    },
    {
        title: "Batch Rename",
        desc: "Ubah nama banyak file sekaligus sebelum diunduh.",
        status: "Dalam Pengembangan"
    },
    {
        title: "Format SVG",
        desc: "Dukungan untuk mengoptimalkan file vektor SVG.",
        status: "Direncanakan"
    }
];

export default function FeatureSuggestions() {
    const [suggestion, setSuggestion] = useState("");
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="max-w-3xl mx-auto space-y-16">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Beranda
            </Link>

            <div className="space-y-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
                    <Sparkles className="h-3 w-3" />
                    Roadmap Produk
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    Saran <span className="text-blue-400">Fitur Baru</span>
                </h1>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                    Bantu kami membangun alat kompresi terbaik. Bagikan ide Anda dengan kami!
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-white/10 p-8 rounded-3xl space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center">
                            <Lightbulb className="h-6 w-6 text-yellow-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Apa yang Anda butuhkan?</h2>
                    </div>

                    {!submitted ? (
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                value={suggestion}
                                onChange={(e) => setSuggestion(e.target.value)}
                                placeholder="Misal: Tambah fitur kompresi video..."
                                className="flex-grow bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                            <button
                                onClick={() => setSubmitted(true)}
                                className="bg-zinc-100 text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-white transition-all shrink-0"
                            >
                                Kirim Ide
                            </button>
                        </div>
                    ) : (
                        <p className="text-blue-300 font-medium">Terima kasih atas idenya! Kami akan meninjau saran Anda.</p>
                    )}
                </div>

                {upcomingFeatures.map((f, i) => (
                    <div key={i} className="bg-zinc-900/30 border border-zinc-900 p-6 rounded-2xl space-y-4 hover:border-zinc-800 transition-colors">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white">{f.title}</h3>
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 font-medium">
                                {f.status}
                            </span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

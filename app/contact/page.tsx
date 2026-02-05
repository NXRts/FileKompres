"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-12">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Beranda
            </Link>

            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    Hubungi <span className="text-blue-400">Kami</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Punya pertanyaan atau masukan? Kami senang mendengar dari Anda.
                </p>
            </div>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Nama Anda</label>
                        <input
                            required
                            type="text"
                            placeholder="Jhon Doe"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Email</label>
                        <input
                            required
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Pesan</label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Bagaimana kami bisa membantu Anda?"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                        <Send className="h-5 w-5" />
                        Kirim Pesan
                    </button>
                </form>
            ) : (
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-12 rounded-3xl text-center space-y-4">
                    <div className="h-16 w-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Pesan Terkirim!</h2>
                    <p className="text-zinc-400">Terima kasih telah menghubungi kami. Kami akan merespons melalui email sesegera mungkin.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                    >
                        Kirim pesan lagi
                    </button>
                </div>
            )}

            <div className="flex items-center justify-center gap-8 pt-8">
                <a href="mailto:support@smartcompres.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                    <Mail className="h-4 w-4" />
                    support@smartcompressor.com
                </a>
            </div>
        </div>
    );
}

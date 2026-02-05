"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        setError(null);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setError("Konfigurasi EmailJS tidak ditemukan. Harap periksa file .env.local Anda.");
            setIsSending(false);
            return;
        }

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            setSubmitted(true);
        } catch (err: any) {
            console.error("EmailJS Error:", err);
            setError("Gagal mengirim pesan. Silakan coba lagi nanti.");
        } finally {
            setIsSending(false);
        }
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

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    {error}
                </div>
            )}

            {!submitted ? (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Nama Anda</label>
                        <input
                            required
                            name="user_name"
                            type="text"
                            placeholder="Jhon Doe"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Email</label>
                        <input
                            required
                            name="user_email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Pesan</label>
                        <textarea
                            required
                            name="message"
                            rows={4}
                            placeholder="Bagaimana kami bisa membantu Anda?"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                        {isSending ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <Send className="h-5 w-5" />
                        )}
                        {isSending ? "Mengirim..." : "Kirim Pesan"}
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
                <a href="mailto:yusufarrofi21@gmail.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                    <Mail className="h-4 w-4" />
                    yusufarrofi21@gmail.com
                </a>
            </div>
        </div>
    );
}

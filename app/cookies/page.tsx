import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiesPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Beranda
            </Link>

            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    Kebijakan <span className="text-blue-400">Cookies</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Transparansi tentang penggunaan cookie dan penyimpanan lokal.
                </p>
            </div>

            <div className="space-y-8 text-zinc-400 leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Cookie className="h-5 w-5 text-blue-400" />
                        Penggunaan Cache & Local Storage
                    </h2>
                    <p>
                        Smart Compressor <strong>tidak menggunakan cookie pelacakan</strong> pihak ketiga. Kami menggunakan penyimpanan lokal browser (Local Storage) atau Session Storage hanya untuk keperluan fungsional aplikasi, seperti menyimpan preferensi target ukuran kompresi Anda selama sesi berlangsung.
                    </p>
                </section>

                <section className="space-y-4 border-t border-zinc-900 pt-8">
                    <h2 className="text-xl font-bold text-white">Mengapa ini aman?</h2>
                    <p>
                        Data yang disimpan secara lokal tidak dapat diakses oleh server kami atau pihak luar. Anda dapat menghapus data ini kapan saja dengan membersihkan cache browser Anda atau menutup tab aplikasi.
                    </p>
                </section>
            </div>
        </div>
    );
}

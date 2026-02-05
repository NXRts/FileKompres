import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function HowItWorks() {
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
                    Bagaimana <span className="text-blue-400">Cara Kerjanya?</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Smart Compressor menggunakan teknologi modern di dalam browser untuk memberikan kompresi tercepat dan teraman.
                </p>
            </div>

            <div className="grid gap-8">
                <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Pemrosesan Client-Side</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Tidak seperti alat populer lainnya, kami tidak mengunggah file Anda ke server mana pun. Kami menggunakan <strong>Canvas API</strong> dan library kompresi berbasis JavaScript (seperti <code>browser-image-compression</code>) untuk melakukan semua perhitungan berat langsung di perangkat Anda.
                    </p>
                </section>

                <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-violet-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Privasi Tanpa Kompromi</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Karena data tidak pernah keluar dari browser Anda, tidak ada risiko kebocoran data di server. File Anda tetap menjadi milik Anda sepenuhnya. Privasi Anda bukan sekadar opsi, melainkan pondasi dari aplikasi ini.
                    </p>
                </section>

                <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Kecepatan Maksimal</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Tanpa perlu waktu unggah dan unduh ke server, proses kompresi menjadi instan. Kami menggunakan algoritma iteratif untuk mencoba mencapai target ukuran file yang Anda inginkan dengan kualitas visual terbaik yang mungkin dicapai.
                    </p>
                </section>
            </div>
        </div>
    );
}

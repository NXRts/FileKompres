import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, EyeOff, Lock } from "lucide-react";

export default function Privacy() {
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
                    Kebijakan <span className="text-blue-400">Privasi</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Privasi Anda adalah prioritas utama kami. Berikut adalah komitmen kami kepada Anda.
                </p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <EyeOff className="h-6 w-6 text-blue-400" />
                        <h2 className="text-2xl font-bold text-white">Tanpa Pelacakan</h2>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                        Kami tidak mengumpulkan informasi pribadi, tidak menggunakan cookie pelacakan, dan tidak menyimpan riwayat file yang Anda kompres. Penggunaan aplikasi ini bersifat anonim sepenuhnya.
                    </p>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Lock className="h-6 w-6 text-violet-400" />
                        <h2 className="text-2xl font-bold text-white">Penyimpanan Lokal</h2>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                        Semua gambar yang Anda proses hanya ada di memori sementara browser Anda. Setelah Anda menutup tab atau menyegarkan halaman, data tersebut akan hilang dari memori. Kami tidak memiliki akses ke konten Anda.
                    </p>
                </section>

                <section className="space-y-4 border-t border-zinc-900 pt-8">
                    <h2 className="text-2xl font-bold text-white">Transparansi</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Aplikasi ini dirancang untuk dijalankan di sisi klien secara eksklusif. Anda dapat memverifikasi ini dengan memeriksa tab "Network" di alat pengembang browser Anda—Anda tidak akan melihat lalu lintas gambar yang dikirim ke server mana pun.
                    </p>
                </section>
            </div>
        </div>
    );
}

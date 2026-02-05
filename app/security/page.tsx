import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Binary, CheckCircle2 } from "lucide-react";

export default function Security() {
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
                    Standar <span className="text-blue-400">Keamanan</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Keamanan data Anda terjamin melalui arsitektur aplikasi yang terisolasi.
                </p>
            </div>

            <div className="grid gap-6">
                <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl flex gap-4">
                    <Binary className="h-10 w-10 text-blue-400 shrink-0" />
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white">Zero-Knowledge Architecture</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Kami menggunakan pendekatan arsitektur di mana server tidak pernah mengetahui atau memiliki akses ke data (gambar/PDF) yang dikerjakan oleh pengguna.
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl flex gap-4">
                    <ShieldAlert className="h-10 w-10 text-orange-400 shrink-0" />
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white">Mencegah Kebocoran Pihak Ketiga</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Dengan tidak adanya transmisi data ke internet, risiko penyadapan data di tengah jalan (Man-in-the-Middle) atau kebocoran dari database cloud tidak mungkin terjadi.
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl flex gap-4">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400 shrink-0" />
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white">Terverifikasi Oleh Browser</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Logika aplikasi transparan dan dapat diperiksa langsung di browser. Kami bangga membangun alat yang jujur dan aman bagi semua orang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

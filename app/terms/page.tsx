import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function Terms() {
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
                    Syarat & <span className="text-blue-400">Ketentuan</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Dengan menggunakan Smart Compressor, Anda menyetujui ketentuan berikut.
                </p>
            </div>

            <div className="space-y-8 text-zinc-400 leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Scale className="h-5 w-5 text-blue-400" />
                        1. Penggunaan Layanan
                    </h2>
                    <p>
                        Smart Compressor disediakan "apa adanya" tanpa jaminan dalam bentuk apa pun. Kami tidak bertanggung jawab atas kehilangan data atau kerusakan yang mungkin terjadi akibat penggunaan alat ini.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">2. Kepemilikan Konten</h2>
                    <p>
                        Kami tidak mengklaim kepemilikan atas file apa pun yang Anda proses. Semua konten tetap milik Anda sepenuhnya. Kami tidak menyimpan atau menyebarkan file Anda.
                    </p>
                </section>

                <section className="space-y-4 border-t border-zinc-900 pt-8">
                    <h2 className="text-xl font-bold text-white">3. Perubahan Ketentuan</h2>
                    <p>
                        Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini.
                    </p>
                </section>
            </div>
        </div>
    );
}

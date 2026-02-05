import React from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Apakah ada batasan ukuran file?",
        a: "Tidak ada batasan keras dari sisi aplikasi, namun performa tergantung pada memori (RAM) perangkat Anda karena semua proses dilakukan secara lokal."
    },
    {
        q: "Format apa saja yang didukung?",
        a: "Saat ini kami mendukung format gambar populer seperti JPEG, PNG, dan WebP. Kami juga sedang mengerjakan dukungan untuk PDF."
    },
    {
        q: "Apakah aplikasi ini gratis?",
        a: "Ya, Smart Compressor sepenuhnya gratis dan tidak memerlukan pendaftaran atau biaya berlangganan apa pun."
    },
    {
        q: "Mengapa hasil kompresi saya lebih besar dari target?",
        a: "Jika gambar sudah sangat dioptimalkan atau jika kualitas akan menjadi sangat buruk di bawah target tersebut, algoritma kami akan berhenti untuk menjaga integritas visual gambar."
    },
    {
        q: "Dapatkah saya menggunakan aplikasi ini secara offline?",
        a: "Ya! Setelah halaman dimuat sekali, Smart Compressor dapat bekerja tanpa koneksi internet sama sekali."
    }
];

export default function FAQ() {
    return (
        <div className="max-w-3xl mx-auto space-y-12">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Beranda
            </Link>

            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    Pertanyaan yang <span className="text-blue-400">Sering Diajukan</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Segala hal yang perlu Anda ketahui tentang Smart Compressor.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <details
                        key={i}
                        className="group bg-zinc-900/30 border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 open:bg-zinc-900/50"
                    >
                        <summary className="p-6 cursor-pointer list-none flex justify-between items-center bg-transparent">
                            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors uppercase text-sm tracking-wide">
                                {faq.q}
                            </h3>
                            <HelpCircle className="h-5 w-5 text-zinc-500 group-open:rotate-180 group-open:text-blue-400 transition-all" />
                        </summary>
                        <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900/50 pt-4">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}

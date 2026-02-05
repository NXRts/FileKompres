"use client";

import React from "react";
import { Github, Shield, Heart, Info, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Privacy Section */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                Smart<span className="text-blue-400">Compressor</span>
                            </span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                            Alat kompresi gambar yang mengutamakan privasi. Semua proses dilakukan sepenuhnya di browser Anda. Data tidak pernah meninggalkan perangkat Anda.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <Globe className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <Info className="h-4 w-4 text-blue-400" />
                            Informasi
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/how-it-works" className="text-zinc-400 hover:text-blue-400 transition-colors">Cara Kerja</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-zinc-400 hover:text-blue-400 transition-colors">Privasi</Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-zinc-400 hover:text-blue-400 transition-colors">Keamanan</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <Heart className="h-4 w-4 text-rose-400" />
                            Bantuan
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/faq" className="text-zinc-400 hover:text-blue-400 transition-colors">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-zinc-400 hover:text-blue-400 transition-colors">Kontak</Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-zinc-400 hover:text-blue-400 transition-colors">Saran Fitur</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>© {currentYear} Smart Compressor. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Build with <Heart className="h-3 w-3 text-rose-500 fill-rose-500 mx-0.5" /> by <span className="text-zinc-300 font-medium">NXRts</span>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-zinc-300 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

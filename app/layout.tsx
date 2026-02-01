import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Image Compressor - Privacy Focussed",
  description: "Compress images locally in your browser without uploading to any server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-zinc-950 text-zinc-100 min-h-screen antialiased selection:bg-blue-500/30")}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <main className="container mx-auto px-4 py-12 md:py-20">
          {children}
        </main>
      </body>
    </html>
  );
}

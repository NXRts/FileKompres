# Smart Image Compressor 🚀

**Smart Image Compressor** adalah aplikasi web modern yang berfokus pada privasi dan kecepatan untuk mengompresi gambar dan mengelola file secara lokal di browser. Dibangun dengan **Next.js 15**, **TypeScript**, dan **Tailwind CSS**.

![Smart Compressor Preview](https://via.placeholder.com/800x400?text=Smart+Compressor+Preview)
*(Anda dapat menambahkan screenshot aplikasi di sini)*

## ✨ Fitur Utama

- **🔒 Privacy-First (Client-Side Only)**: Semua proses kompresi dilakukan sepenuhnya di browser Anda. File **tidak pernah** diunggah ke server mana pun.
- **🎯 Target File Size**: Tentukan ukuran maksimal yang diinginkan (contoh: 'Max 300KB'). Algoritma cerdas akan mencoba mengompres gambar agar sesuai dengan target tersebut.
- **📂 Multi-Format Support**:
    - **Images**: JPG, PNG, WEBP (Kompresi cerdas).
    - **Documents**: PDF, Word (DOC/DOCX) (Optimasi dasar & pengarsipan).
    - **Validasi Ketat**: Hanya file yang didukung yang dapat diproses.
- **📦 Batch Processing**: Drag & drop banyak file sekaligus.
- **💾 One-Click ZIP Download**: Unduh semua file yang telah diproses dalam satu file ZIP yang rapi.
- **🎨 Modern UI**: Antarmuka Glassmorphism yang estetik, responsif (Mobile Friendly), dan mudah digunakan.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Clsx](https://github.com/lukeed/clsx)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Compression Logic**: `browser-image-compression`
- **PDF Handling**: `pdf-lib`
- **Archiving**: `jszip`
- **Icons**: `lucide-react`

## 🚀 Cara Menjalaankan Project

Project ini berada di dalam folder `web`. Ikuti langkah berikut untuk menjalankannya di komputer lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (v18 atau terbaru).

### Instalasi

1.  **Clone repository ini** (jika belum):
    ```bash
    git clone https://github.com/NXRts/FileKompres.git
    cd FileKompres
    ```

2.  **Masuk ke direktori web**:
    ```bash
    cd web
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Jalankan Development Server**:
    ```bash
    npm run dev
    ```

5.  **Buka Browser**:
    Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## 📁 Struktur Project

```
KompresData/
├── web/                  # Source code aplikasi Next.js
│   ├── app/              # App Router (Pages & Layout)
│   ├── components/       # Reusable AI Components
│   │   ├── Compressor/   # Komponen utama (Dashboard, Settings, Table)
│   │   └── ui/           # Komponen dasar (Button, Dropzone, Input)
│   ├── lib/              # Logic & Utilities (Compressor service)
│   └── ...
└── README.md             # Dokumentasi Project
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat *Pull Request* atau laporkan *Issues* jika menemukan bug atau memiliki ide fitur baru.

---
Dibuat dengan ❤️ oleh [NXRts].

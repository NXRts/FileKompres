# Smart Image Compressor 🚀

**Smart Image Compressor** is a modern, privacy-focused web application designed to compress images and manage files locally within your browser. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

![Smart Compressor Preview](https://via.placeholder.com/800x400?text=Smart+Compressor+Preview)
*(You can add a screenshot of the application here)*

## ✨ Key Features

- **🔒 Privacy-First (Client-Side Only)**: All compression processes happen entirely in your browser. Files are **never** uploaded to any server.
- **🎯 Target File Size**: Specify your desired maximum size (e.g., 'Max 300KB'). The smart algorithm automatically adjusts compression to meet this target.
- **📂 Multi-Format Support**:
    - **Images**: JPG, PNG, WEBP (Smart compression).
    - **Documents**: PDF, Word (DOC/DOCX) (Basic optimization & archiving).
    - **Strict Validation**: Only supported files can be processed.
- **📦 Batch Processing**: Drag & drop multiple files at once.
- **💾 One-Click ZIP Download**: Download all processed files in a single, organized ZIP archive.
- **🎨 Modern UI**: Aesthetic Glassmorphism design, responsive (Mobile Friendly), and easy to use.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Clsx](https://github.com/lukeed/clsx)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Compression Logic**: `browser-image-compression`
- **PDF Handling**: `pdf-lib`
- **Archiving**: `jszip`
- **Icons**: `lucide-react`

## 🚀 How to Run

The project is located in the `web` directory. Follow these steps to run it on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or later) installed.

### Installation

1.  **Clone this repository** (if you haven't already):
    ```bash
    git clone https://github.com/NXRts/FileKompres.git
    cd FileKompres
    ```

2.  **Navigate to the web directory**:
    ```bash
    cd web
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

5.  **Open Browser**:
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
KompresData/
├── web/                  # Next.js Source Code
│   ├── app/              # App Router (Pages & Layout)
│   ├── components/       # Reusable UI Components
│   │   ├── Compressor/   # Core Components (Dashboard, Settings, Table)
│   │   └── ui/           # Basic UI Components (Button, Dropzone, Input)
│   ├── lib/              # Logic & Utilities (Compressor service)
│   └── ...
└── README.md             # Project Documentation
```

## 🤝 Contribution

Contributions are welcome! Please feel free to open a *Pull Request* or report *Issues* if you find bugs or have ideas for new features.

---
Made with ❤️ by [NXRts].

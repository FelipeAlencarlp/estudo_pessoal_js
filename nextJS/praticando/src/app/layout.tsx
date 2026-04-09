import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praticando",
  description: "Criado por Felipe Alencar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-600 p-5">
          <h1 className="text-2xl mb-5">Praticando</h1>

          <NavHeader />
        </header>

        <main className="grow p-5">
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-4">
          <p className="text-center text-xs">© Praticando NextJS</p>
        </footer>
      </body>
    </html>
  );
}

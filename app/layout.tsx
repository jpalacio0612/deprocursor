import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estrategias que transforman",
  description:
    "Este programa utiliza la actividad física como medio terapéutico en los grupos Generosidad y Libertad del bloque Alcaldía, promoviendo el bienestar y la reintegración social de adolescentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Image
              src="/ind-logo.png"
              alt="logo"
              width={150}
              height={50}
              priority
              className="object-contain"
            />
            <div className="hidden sm:block">
              <NavBar />
            </div>
            <Image
              src="/cef-logo-2.png"
              alt="logo"
              width={100}
              height={50}
              priority
              className="object-contain"
            />
          </div>
          <div className="sm:hidden flex justify-center pb-4">
            <NavBar />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

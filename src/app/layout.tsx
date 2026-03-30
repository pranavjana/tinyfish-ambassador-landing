import type { Metadata } from "next";
import { generalSans, geistMono, hostGrotesk, pristine, gambarino, ranade } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TinyFish Ambassador Programme 2026",
  description:
    "Join the voice of the agentic web revolution. A selective programme for students passionate about AI and the future of web agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${geistMono.variable} ${hostGrotesk.variable} ${pristine.variable} ${gambarino.variable} ${ranade.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

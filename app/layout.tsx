import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { inter } from '@/app/ui/fonts';
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Exercice app Next.js Dashboard avec App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

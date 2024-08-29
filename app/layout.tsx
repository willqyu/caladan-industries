import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";


import "./globals.css";
import { fontMono, fontPrimary, fontPrimaryBold } from "@/lib/styles";


export const metadata: Metadata = {
  title: "Caladan Industries",
  description: "Caladan Industries is a defence startup based in the UK focusing on cost efficient, scalable hardware manufacture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth [&::-webkit-scrollbar]:hidden">
      <body className={fontMono.className}>{children}</body>
    </html>
  );
}

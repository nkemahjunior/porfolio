import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { lato, SyncopateF } from "@/styles/fonts";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "nkemah junior portfolio",
  description: "porfolio of nkemah junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //${geistSans.variable} ${geistMono.variable}
    <html lang="en">
      <body
        className={` antialiased bg-black text-white ${lato.className}`}
      >
        {children}
      </body>
    </html>
  );
}

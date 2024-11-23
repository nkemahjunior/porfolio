import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/styles/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "nkemah junior portfolio",
  description: "Nkemah Junior - Frontend and Backend developer",
  metadataBase: new URL("https://nkemah-junior.vercel.app/"),
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
        className={` antialiased bg-black text-white ${lato.className}  max-w-full overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}



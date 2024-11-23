import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/styles/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "nkemah junior portfolio",
  description: "porfolio of nkemah junior",
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


/**
 * I’ve just launched the first version of my portfolio at nkemah-junior.vercel.app, showcasing some of my projects. I’d love to hear any feedback or suggestions—feel free to explore the site and let me know your thoughts!"
 */
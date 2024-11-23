import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/styles/fonts";
import Head from "next/head";

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
      <Head>
        <meta property="og:title" content="Nkemah Junior Portfolio" />
        <meta
          property="og:description"
          content="My Portfolio website showcasing some of my projects"
        />
        <meta
          property="og:image"
          content="https://example.com/path/to/your-hero-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="A brief description of your website."
        />
        <meta
          name="twitter:image"
          content="https://example.com/path/to/your-hero-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={` antialiased bg-black text-white ${lato.className}  max-w-full overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}

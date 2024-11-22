import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/styles/fonts";

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
        className={` antialiased bg-black text-white ${lato.className}  max-w-full overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}

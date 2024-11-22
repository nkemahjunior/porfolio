"use client";

import Link from "next/link";

interface fnProps {
  children: React.ReactNode;
  link: string;
}

export default function ProjectButton({ children, link }: fnProps) {
  return (
    <Link href={link} legacyBehavior passHref>
      <a
        target="_blank"
        className=" h-[3rem] w-[10rem]  rounded-sm bg-white flex justify-center items-center hover:scale-95 transition-transform duration-150 hover:bg-gray-400 "
      >
        {children}
      </a>
    </Link>
  );
}

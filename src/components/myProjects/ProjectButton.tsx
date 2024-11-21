 "use client"

import Link from "next/link";
import {motion} from "framer-motion"
import { div } from "framer-motion/client";

interface fnProps {
    children: React.ReactNode
  link: string;
}
 
export default function ProjectButton({children, link}:fnProps) {
    return (

        <Link
          href={link}
          className=" h-[3rem] w-[10rem]  rounded-sm bg-white flex justify-center items-center hover:scale-95 transition-transform duration-150 hover:bg-gray-400 "
        >
          {children}
        </Link>
   
    );
}
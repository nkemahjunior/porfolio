"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const cvariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        stiffness: 90,
        type: "spring",
        bounce: 0.2,
      },
      duration: 0.5,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      // x: { stiffness: 90 },
    },
  },
};

export default function NavLi({ text, link }: { text: string; link: string }) {
  return (
    <motion.li variants={cvariants} whileHover={{ scale: 1.1 }}>
      <Link
        href={`#${link}`}
        className=" hover:text-gray-400 duration-300 delay-75"
      >
        {text}
      </Link>
    </motion.li>
  );
}

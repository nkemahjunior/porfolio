"use client";

import React from "react";
import { motion } from "framer-motion";
import useChangeCardGradient from "@/hooks/useChangeCardGradient";

interface fnProps {
  children: Readonly<React.ReactNode>;
  Div1HW: string;
  Div1BeforeHW: string;
  Div2HW: string;
  padding: string;
}

export default function CardBackgroundGradient({
  children,
  Div1HW,
  Div1BeforeHW,
  Div2HW,
  padding,
}: fnProps) {
  const colorsT = {
    "1": ["indigo-500", "purple-500", "pink-500"], // indigo, purple, pink
    "2": ["indigo-500", "sky-500", "emerald-500"], // blue, sky, green
  };

  const colors = {
    "1": ["#4F46E5", "#9333EA", "#EC4899"], // indigo, purple, pink
    "2": ["#1E40AF", "#0284C7", "#10B981"], // blue, sky, green
  };

  const { gradientColor1, gradientColor2, gradientColor3, currentColorArr } =
    useChangeCardGradient(colorsT);

  return (
    <motion.div
      initial={{
        background: "linear-gradient(to right, #4F46E5, #9333EA, #EC4899 )",
      }}
      animate={{
        background: `linear-gradient(to right, ${colors[currentColorArr].join(
          ", ",
        )}`,
      }}
      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
      className={` ${Div1HW} rounded-2xl flex justify-center items-center relative 
       before:transition-colors before:duration-150
          before:bg-gradient-to-r before:from-${gradientColor1} before:via-${gradientColor2} before:to-${gradientColor3}  before:content-[''] before:rounded-2xl  before:z-[-1] before:blur-md before:md:blur-lg ${Div1BeforeHW} before:absolute before:bg-blue-600  before:border-solid before:border-2 before:border-pink-800
          `}
    >
      <div
        className={`  overflow-hidden   flex justify-center items-center ${padding} ${Div2HW} relative bg-black  rounded-2xl  
         
          `}
      >
        {children}
      </div>
    </motion.div>
  );
}
//c1 = h-[22.2rem] w-[20.2rem] md:h-[24.5rem] md:w-[24.5rem]
//before = before:h-[22.2rem] before:w-[20.2rem] before:md:h-[24.5rem] before:md:w-[24.5rem]
//c3= h-[22rem] w-[20rem]  md:h-[24rem] md:w-[24rem]
//md:w-[${widthMD}.5rem]
//md:w-[${widthMD}rem]

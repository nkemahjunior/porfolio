"use client";
import CardBackgroundGradient from "../general/CardBackgroundGradient";
import { motion } from "framer-motion";

export default function CardTextOnly({
  heading,
  text,
}: {
  heading: string;
  text: string;
  }) {
  

  return (
    <div
      style={{
        perspective: "1000px", //increase 3d effect
      }}
    >
      <motion.div
        initial={{ opacity: 0, rotateY: 80 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ amount: 0.8, once: true }}
        transition={{
          duration: 0.2,
          ease: "linear",
          delay: 0.1,
        }}
      >
        <CardBackgroundGradient
          Div1HW="h-[22.2rem] w-[20.2rem] md:h-[24.5rem] md:w-[24.5rem]"
          Div1BeforeHW="before:h-[22.2rem] before:w-[20.2rem] before:md:h-[24.5rem] before:md:w-[24.5rem]"
          Div2HW="h-[22rem] w-[20rem]  md:h-[24rem] md:w-[24rem]"
          padding="p-4 md:p-8"
        >
          <div className="space-y-6 ">
            <p className=" text-2xl text-center">{heading}</p>
            <p className=" text-center">{text}</p>
          </div>
        </CardBackgroundGradient>
      </motion.div>
    </div>
  );
}

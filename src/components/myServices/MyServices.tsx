"use client";
import { FrijoleF } from "@/styles/fonts";
import "@/styles/myServices.css";
import Link from "next/link";
import CardTextOnly from "./CardTextOnly";
import { motion } from "framer-motion";

export default function MyServices() {
  //before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:content-[''] before:rounded-2xl  before:z-[-1] before:blur-lg before:h-[23rem] before:md:h-[25rem] before:w-[25rem] before:absolute before:bg-blue-600  before:border-solid before:border-2 before:border-pink-800
  return (
    <div id="services" className="   md:mt-20 space-y-14 md:space-y-20 ">
      <motion.h1
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{
          duration: 0.1,
          ease: "linear",
          delay: 0.1,
        }}
        className={` text-center text-4xl md:text-6xl xl:text-7xl hover:text-gray-400  ${FrijoleF.className}`}
      >
        <Link href={"#"}>My Services</Link>
      </motion.h1>

      <div
        className="    w-full   flex justify-center lg:flex-none
       
      "
      >
        <div className="  px-4 md:px-44 lg:px-24 xl:px-36 2xl:px-64 lg:gap-x-20 xl:gap-x-28 2xl:gap-x-36 space-y-12 md:space-y-16 lg:space-y-0  lg:flex lg:justify-around">
          <div className={`   sticky lg:static lg:top-auto top-0 rounded-2xl `}>
            <CardTextOnly
              heading="Front-end Development"
              text="I design and develop responsive user interfaces that work seamlessly
            across devices. My focus is on clean layouts, smooth interactions,
            and optimizing performance to deliver a user-friendly experience.
            Each project is crafted with care to balance functionality and
            aesthetics."
            />
          </div>
          <div className={` sticky top-4 lg:static lg:top-auto  rounded-2xl `}>
            <CardTextOnly
              heading="Back-end Development"
              text="I build robust and scalable back-end systems. My focus is on ensuring smooth server-side operations. By integrating APIs and
            managing databases, I ensure that the back-end supports 
            seamless user experiences and meets business needs.
            Each project is built with attention to performance, security, and reliability."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4, once: true }}
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
              text="I craft visually appealing websites with a strong focus on user experience. Using modern technologies like React, Next.js, and 
              Tailwind CSS, I build fast, responsive interfaces that are both functional and easy to navigate. My approach emphasizes usability, 
              performance optimization, and adherence to best practices, ensuring a smooth and enjoyable interaction for all users."
            />
          </div>
          <div className={` sticky top-4 lg:static lg:top-auto  rounded-2xl `}>
            <CardTextOnly
              heading="Back-end Development"
              text="I create robust and scalable back-end solutions that ensure your application runs smoothly. Leveraging tools like Spring Boot, 
              I develop secure and efficient APIs while managing database operations. My focus on performance, security, and reliability ensures your 
              back-end aligns with both technical needs and business objectives."
            />
          </div>
        </div>
      </div>
    </div>
  );
}


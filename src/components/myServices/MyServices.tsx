"use client";
import { FrijoleF } from "@/styles/fonts";
import "@/styles/myServices.css"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CardTextOnly from "./CardTextOnly";

export default function MyServices() {
  //before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:content-[''] before:rounded-2xl  before:z-[-1] before:blur-lg before:h-[23rem] before:md:h-[25rem] before:w-[25rem] before:absolute before:bg-blue-600  before:border-solid before:border-2 before:border-pink-800
  return (
    <div className="  mt-16 md:mt-20 space-y-12 md:space-y-16 ">
      <h1
        className={` text-center text-4xl md:text-6xl xl:text-7xl hover:text-gray-400  ${FrijoleF.className}`}
      >
        <Link href={"#"}>My Services</Link>
      </h1>

      <div
        className=" border-solid border-yellow-400 border-0  px-4 md:px-44 lg:px-24 xl:px-36 2xl:px-64 lg:gap-x-20 xl:gap-x-28 2xl:gap-x-36 w-full  space-y-12 md:space-y-16 lg:space-y-0  lg:flex lg:justify-around
       
      "
      >
        <div className={`   sticky lg:static lg:top-auto top-0 rounded-2xl `}>
          <CardTextOnly />
        </div>
        <div
          className={` sticky top-4 lg:static lg:top-auto  rounded-2xl `}
        >
          <CardTextOnly />
        </div>
      </div>
    </div>
  );
}
/**
 * ${
          reachedTop ? "" : "sticky top-0"
        }
${
          reachedTop ? "" : "sticky top-4"
          ${
          reachedTop ? "" : "sticky top-8"
        }
 */

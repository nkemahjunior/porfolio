 "use client"

import { useState } from "react";


interface fnProps{
    showNav: (arg: boolean) => void
    show: boolean
}
 
export default function Hamburger({ showNav, show }: fnProps) {
    
    
    
      const toggleNavMobile = (show: boolean) => {
        showNav(show);
      };
    
    return (
      <div className=" flex h-full w-16 items-center justify-center border-0 border-solid border-red-600 lg:hidden ">
        <div
          className=" cursor-pointer space-y-2 lg:hidden"
          onClick={() => toggleNavMobile(!show)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              show ? "translate-y-2.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              show ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              show ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </div>
    );
}
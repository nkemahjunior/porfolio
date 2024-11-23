"use client";
import { FrijoleF } from "@/styles/fonts";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import NavLi from "./NavLi";

interface fnProps {
  showNavMobile: boolean;
  setShowNavMobile: (arg: boolean) => void;
}

export default function NavLinks({ showNavMobile, setShowNavMobile }: fnProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (showNavMobile) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");
  }, [showNavMobile]);

  const pvariants: Variants = {
    opacityy: {
      opacity: 1,
    },

    open: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.4,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.9,
        //delayChildren:0.2,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.ul
      variants={pvariants}
      initial={isMobile ? "closed" : ""}
      animate={isMobile ? (showNavMobile ? "open" : "closed") : "opacityy"}
      style={{ opacity: 0 }}
      className={`${FrijoleF.className}  lg:space-x-6 absolute$ fixed top-0 lg:static flex flex-col lg:flex-row space-y-12 pl-2 md:pl-16  lg:pl-0 pt-8 md:pt-16 lg:pt-0 lg:space-y-0 bg-black lg:bg-inherit   inset-0 lg:inset-auto mt-[5rem] lg:mt-0 z-50 lg:z-0  
         lg:flex   
      `}
      //   onClick={() => setShowNavMobile(false)}
    >
      <NavLi setShowNavMobile={setShowNavMobile}  text="Home" link="hero" />
      <NavLi setShowNavMobile={setShowNavMobile} text="My Services" link="services" />
      <NavLi setShowNavMobile={setShowNavMobile} text="My Projects" link="projects" />
      {/* <NavLi text="About me" link=""/> */}
    </motion.ul>
  );
}
//${showNavMobile ? "   " : "hidden "}
//${showNavMobile ? "":" translate-x-[100rem]"}

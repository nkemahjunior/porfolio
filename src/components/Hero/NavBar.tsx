"use client";

import { useState } from "react";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

export default function NavBar() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  return (
    <nav className="  border-solid border-b-2 border-gray-400  h-[5rem] md:h-[8rem] lg:h-[6rem]  flex lg:flex-none px-2 md:px-16  lg:px-0  text-4xl md:text-6xl lg:text-2xl">
      <div className=" w-full h-full lg:flex lg:justify-around lg:items-center  ">
        <Logo />
        <NavLinks showNavMobile={showNavMobile} />
      </div>
      <Hamburger showNav={setShowNavMobile} show={showNavMobile} />
    </nav>
  );
}

"use client";


import LightBeam from "./LightBeam";
import NavBar from "./NavBar";
import IntroText from "./IntroText";
import HeroButton from "./HeroButton";
import Dots from "./Dots";
import BlackDiv from "./BlackDiv";

export default function Hero() {

  return (
    <div className="h-screen  overflow-hidden bg-black">
      <NavBar />

      <div className="  border-0 border-solid border-red-600  flex justify-center h-full ">
        <div className=" border-solid border-0 border-yellow-700 relative w-full ">
          <LightBeam />
          <div className=" h-full flex  w-full md:justify-center items-center border-green-700 border-0 border-solid  ">
            <div className=" w-full md:w-[90%] xl:w-[80%]  2xl:w-1/2  border-0 border-solid border-red-700 z-10 ">
              <IntroText />

              <div className=" border-solid border-0 border-red-600 flex justify-center mt-8 md:mt-10 2xl:mt-12">
                <HeroButton />
              </div>
            </div>
          </div>

          <Dots/>
          <BlackDiv/>
        </div>
      </div>
    </div>
  );
}

/**
 *       <nav className=" border-solid border-b-2 border-gray-400  h-[5rem] md:h-[8rem] lg:h-[6rem] flex lg:flex-none px-2 md:px-16  lg:px-0 text-4xl md:text-6xl lg:text-2xl">
        <div className=" w-full h-full lg:flex lg:justify-around lg:items-center border-red-700 border-solid border-0">
          <ul className=" h-full lg:h-auto flex items-center lg:flex-none">
            <li>
              <Link
                href={"#"}
                className={`${RubikIso.className} text-7xl md:text-8xl   lg:text-8xl`}
              >
                Z
              </Link>
            </li>
          </ul>

          <ul
            className={`${
              FrijoleF.className
            } lg:space-x-6 absolute top-0 lg:static flex flex-col lg:flex-row space-y-12 pl-2 md:pl-16  lg:pl-0 pt-8 md:pt-16 lg:pt-0 lg:space-y-0 bg-black lg:bg-inherit  border-emerald-500 border-0 border-solid inset-0 lg:inset-auto mt-[5rem] lg:mt-0 z-50 lg:z-0  ${
              showNavMobile ? "" : "hidden lg:flex "
            }`}
            //   onClick={() => setShowNavMobile(false)}
          >
            <li>
              <Link
                href={"#"}
                className=" hover:text-gray-400 duration-300 delay-75"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className=" hover:text-gray-400 duration-300 delay-75"
              >
                My Services
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className=" hover:text-gray-400 duration-300 delay-75"
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className=" hover:text-gray-400 duration-300 delay-75"
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>

        <div className=" flex h-full w-16 items-center justify-center border-0 border-solid border-red-600 lg:hidden ">
          <div
            className="z-20 cursor-pointer space-y-2 lg:hidden"
            onClick={() => toggleNavMobile(!showNavMobile)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                showNavMobile ? "translate-y-2.5 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                showNavMobile ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                showNavMobile ? "-translate-y-2.5 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
 */

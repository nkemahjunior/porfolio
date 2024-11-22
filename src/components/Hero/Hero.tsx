"use client";

import LightBeam from "./LightBeam";
import NavBar from "./NavBar";
import IntroText from "./IntroText";
import HeroButton from "./HeroButton";
import Dots from "./Dots";
import BlackDiv from "./BlackDiv";

export default function Hero() {
  return (
    <div id="hero" className="h-screen w-full bg-black  ">
      <NavBar />

      <div className="  border-0 border-solid border-red-600  flex justify-center h-full ">
        <div className=" border-solid border-0 border-yellow-700 relative w-full overflow-x-clip ">
          <LightBeam />
          <div className=" h-full flex  w-full md:justify-center items-center border-green-700 border-0 border-solid  ">
            <div className=" w-full md:w-[90%] xl:w-[80%]  2xl:w-1/2  border-0 border-solid border-red-700 z-10 ">
              <IntroText />

              <div className=" border-solid border-0 border-red-600 flex justify-center mt-8 md:mt-10 2xl:mt-12">
                <HeroButton />
              </div>
            </div>
          </div>

          <Dots />
          <BlackDiv />
        </div>
      </div>
    </div>
  );
}

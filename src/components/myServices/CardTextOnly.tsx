"use client";
import CardBackgroundGradient from "../general/CardBackgroundGradient";

export default function CardTextOnly() {
  //c1 = h-[22.2rem] w-[20.2rem] md:h-[24.5rem] md:w-[24.5rem]
  //before = before:h-[22.2rem] before:w-[20.2rem] before:md:h-[24.5rem] before:md:w-[24.5rem]
  //c3= h-[22rem] w-[20rem]  md:h-[24rem] m

  return (
    <>
      <CardBackgroundGradient
        Div1HW="h-[22.2rem] w-[20.2rem] md:h-[24.5rem] md:w-[24.5rem]"
        Div1BeforeHW="before:h-[22.2rem] before:w-[20.2rem] before:md:h-[24.5rem] before:md:w-[24.5rem]"
        Div2HW="h-[22rem] w-[20rem]  md:h-[24rem] md:w-[24rem]"
        padding="p-4 md:p-8"
      >
        <div className="space-y-6">
          <p className=" text-2xl">Front-end Development</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem non
            sapiente illo temporibus. Quisquam rem aliquid, cum perferendis
            porro numquam? Nemo ad maiores autem quaerat maxime provident non
            reiciendis doloribus quisquam numquam dolore cupiditate
            exercitationem adipisci in, neque placeat corrupti ipsa consequatur
            quia ab, magni voluptatum quo possimus. Maiores, quod!
          </p>
        </div>
      </CardBackgroundGradient>
    </>
  );
}

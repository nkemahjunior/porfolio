import Image from "next/image";
import CardBackgroundGradient from "../general/CardBackgroundGradient";
import Link from "next/link";
import ProjectButton from "./ProjectButton";

interface fnProps{
  cardDesc: string
  githubLink: string
  liveLink: string
  imagePath: string

}

export default function ProjectsCard({ cardDesc, imagePath, githubLink, liveLink }: fnProps) {
  //resize on https://squoosh.app/
  //when resizing pictures, put the width = 1840
  return (
    <>
      {" "}
      <div className="  px-4  ">
        <div className=" w-full space-y-6 ">
          <Link href={liveLink} className=" w-full justify-center flex">
            <div className=" relative w-[20rem]  md:w-[34rem]  lg:w-[46rem]  2xl:w-[84rem] border-2 border-solid border-gray-500 ">
              {/* <div className=" bg-[rgba(0,0,0,0.2)] w-full h-full absolute  "></div> */}
              <Image
                src={imagePath}
                // src={"/m.png"}
                sizes="90vw"
                //fill
                width={500}
                height={500}
                style={{
                  minHeight: "1rem",
                  width: "100%",
                  height: "auto",
                  //objectFit: "contain",
                }}
                alt="screen shot of one of my projects"
                quality={100}
              />
            </div>
          </Link>

          <div className=" w-full flex justify-center">
            <div className="w-full  md:w-[60%] space-y-6">
              <p className=" text-center ">{cardDesc}</p>

              <div className=" flex w-full justify-center space-x-4 md:space-x-6 text-black  ">
                <ProjectButton link={githubLink}>View Source</ProjectButton>
                <ProjectButton link={liveLink}>Live</ProjectButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // return (
  //   <div className=" border-yellow-400 border-solid border-4 w-full flex justify-center">
  //     <div className=" relative w-[20rem]  md:w-[34rem]  lg:w-[46rem]  2xl:w-[84rem]   ">
  //       <div className=" bg-[rgba(0,0,0,0.2)] w-full h-full absolute flex justify-center items-center ">
  //         <div className=" border-solid border-2 border-emerald-500 w-1/2 ">
  //           {/* <p>
  //             An E commerce shop for various types of clothes with stripe
  //             payment
  //           </p>
  //           <div className=" flex w-full justify-center ">
  //             <Link href={""} className=" py-4 px-8 rounded-2xl">
  //               View Source
  //             </Link>
  //             <Link href={""} className=" py-4 px-8 rounded-2xl">
  //               {" "}
  //               Live
  //             </Link>
  //           </div> */}
  //         </div>
  //       </div>
  //       <Image
  //         src={"/shopping.webp"}
  //         // src={"/m.png"}
  //         sizes="90vw"
  //         //fill
  //         width={500}
  //         height={500}
  //         style={{
  //           minHeight: "1rem",
  //           width: "100%",
  //           height: "auto",
  //           //objectFit: "contain",
  //         }}
  //         alt="screen shot of one of my projects"
  //         quality={100}
  //       />
  //     </div>
  //   </div>
  // );
}

/**
 *   return (
    <div className=" border-yellow-400 border-solid border-4 w-full flex justify-center">
      <CardBackgroundGradient
        Div1HW="  w-[20.2rem]  md:w-[34.5rem]  lg:w-[46.5rem]  2xl:w-[84.5rem]  p-1"
        Div1BeforeHW=" before:w-[20.2rem]  before:md:w-[34.5rem]  before:lg:w-[46.5rem]  before:2xl:w-[84.5rem]   before:h-full before:p-4"
        Div2HW=" w-[20rem]  md:w-[34rem]  lg:w-[46rem]  2xl:w-[84rem]   "
        padding=""
      >
        <div className=" relative w-full ">
          <Image
            src={"/shopping.webp"}
            // src={"/m.png"}
            sizes="90vw"
            //fill
            width={500}
            height={500}
            
            style={{
              minHeight: "1rem",
              width: "100%",
              height: "auto",
              //objectFit: "contain",
            }}
            alt="screen shot of one of my projects"
            quality={100}
          />
        </div>
      </CardBackgroundGradient>
    </div>
  );
 */
/**
 * 
 *           <Image
            src={"/shopping.webp"}
            // src={"/m.png"}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
            alt="screen shot of one of my projects"
            quality={100}
          />
 * 
 * 
Div1HW="h-[20.2rem] w-[20.2rem] md:h-[34.5rem] md:w-[34.5rem] lg:h-[46.5rem] lg:w-[46.5rem] 2xl:h-[50.5rem] 2xl:w-[84.5rem]"
        Div1BeforeHW="before:h-[20.2rem] before:w-[20.2rem] before:md:h-[34.5rem] before:md:w-[34.5rem] before:lg:h-[46.5rem] before:lg:w-[46.5rem] before:2xl:h-[50.5rem] before:2xl:w-[84.5rem]"
        Div2HW="h-[10rem] w-[20rem]  md:h-[34rem] md:w-[34rem] lg:h-[46rem] lg:w-[46rem] 2xl:h-[50rem] 2xl:w-[84rem]"
        padding=""
        
 *         <Image
          src={"/medic.webp"}
          height={0}
          width={1152}
          alt="screen shot of one of my projects"
                  quality={100}
                  layout="fixed"
        />
 */

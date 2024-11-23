"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectDesc from "./ProjectDesc";
import { motion } from "framer-motion";

interface fnProps {
  underDevelopment: boolean
  cardDesc: string;
  githubLink: string;
  liveLink: string;
  imagePath: string;
}

export default function ProjectsCard({
  underDevelopment,
  cardDesc,
  imagePath,
  githubLink,
  liveLink,
}: fnProps) {
  //resize on https://squoosh.app/
  //when resizing pictures, put the width = 1840
  return (
    <>
      {" "}
      <motion.div
        className="  px-4  "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{
          duration: 0.2,
          ease: "linear",
          delay: 0.1,
        }}
      >
        <div className=" w-full space-y-6 ">
          <Link
            href={liveLink}
            className=" w-full justify-center flex"
            passHref
            legacyBehavior
          >
            <a target="_blank" className="w-full justify-center flex">
              <div className=" relative w-[20rem]  md:w-[34rem]  lg:w-[46rem]  2xl:w-[84rem] border-2 border-solid border-gray-500 ">
                <div className=" hover:lg:bg-[rgba(0,0,0,0.2)] w-full h-full absolute  "></div>
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
            </a>
          </Link>

          <ProjectDesc
            underDevelopment={underDevelopment}
            cardDesc={cardDesc}
            githubLink={githubLink}
            liveLink={liveLink}
          />
        </div>
      </motion.div>
    </>
  );
}

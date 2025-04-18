"use client";
import { FrijoleF } from "@/styles/fonts";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

export default function MyProjects() {
  return (
    <div id="projects" className="  mt-20 md:mt-28 space-y-10 md:space-y-20 ">
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
        <Link href={"#"}>My Projects</Link>
      </motion.h1>

      <div className="  space-y-16 md:space-y-20">
        <ProjectsCard
          underDevelopment={true}
          cardDesc=" This is a restaurant manager application that allows managers to view restaurant statistics, manage menus, manage orders and schedules, run advertisements, and receive payments."
          githubLink="https://github.com/nkemahjunior/-zeco-eats"
          liveLink="https://github.com/nkemahjunior/-zeco-eats"
          imagePath="/eats-manager.webp"
        />
        <ProjectsCard
          underDevelopment={false}
          cardDesc=" This is a food delivery application where users can browse different dishes from different restaurants, make orders and receive their food at their desired location"
          githubLink="https://github.com/nkemahjunior/-zeco-eats"
          liveLink="https://zeco-eats.vercel.app/home"
          imagePath="/eats.webp"
        />
        <ProjectsCard
        underDevelopment={false}
          cardDesc=" This platform allows patients to book appointments with doctors and receive their consultation results. For doctors the platform enable them to send tests to the various laboratories and receive the results back from the lab technicians"
          githubLink="https://github.com/nkemahjunior/zecomedicalFrontend"
          liveLink="https://zecomedical.vercel.app/"
          imagePath="/medical.webp"
        />
        <ProjectsCard
        underDevelopment={false}
          cardDesc="This is a modern and user-friendly e-commerce platform designed
                for browsing and purchasing clothing across various categories.
                The site features a clean and intuitive interface that ensures a
                seamless shopping experience. Users can explore a wide range of
                products and filter by categories."
          githubLink="https://github.com/nkemahjunior/zeco-shopping-e-commerce-app"
          liveLink="https://zeco-shopping.vercel.app/"
          imagePath="/shopping.webp"
        />

        <ProjectsCard
        underDevelopment={false}
          cardDesc="A student management platform , where students can register for main, minor and elective courses, and view their results."
          githubLink="https://github.com/nkemahjunior/go-Student"
          liveLink="https://go-student.vercel.app/"
          imagePath="/school.webp"
        />
      </div>
    </div>
  );
}

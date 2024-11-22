"use client";
import { lightBeamVariants } from "@/app/utils/lightBeamVariants";
import { useGetLightBeamVariant } from "@/hooks/useGetLightBeamVariant";
// import "@/styles/hero.css";
import { motion } from "framer-motion";

export default function LightBeam() {
  const lbVariants = lightBeamVariants;
  const variant = useGetLightBeamVariant();

  console.log(variant);

  return (
    //nav bar z-49 cos nav is z-50
    <motion.div
      variants={lbVariants}
      initial="small"
      animate={variant}
      className=" 
         bg-gray-500  shadow-red-700   absolute blur-[80px]   "
    ></motion.div>
  );
}

/**
 *     return (
      //nav bar z-49 cos nav is z-50
      <div
        className=" 
         bg-gray-500  shadow-red-700   absolute blur-[80px]  animate-lightBeam "
      ></div>
    );
 */

import { FrijoleF } from "@/styles/fonts";
import "@/styles/introText.css";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";

export default function IntroText() {
  const words = [
    "beautiful",
    "modern",
    "scalable",
    "responsive",
    "intuitive",
    "dynamic",
    "interactive",
  ];

  return (
    <>
      <motion.p
        initial={{ /*y: 100,*/ opacity: 0 }}
        animate={{ /*y: 0,*/ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`text-5xl md:text-8xl  ${FrijoleF.className} `}
      >
        <span className=" block text-center">Hello, I am </span>
        <span className=" block text-center 2xl:text-nowrap text-gray-300">
          Nkemah Junior
        </span>
      </motion.p>

      <motion.div
        initial={{ /*y: 100,*/ opacity: 0 }}
        animate={{ /*y: 0,*/ opacity: 1 }}
        transition={{
          // type: "spring",
          // stiffness: 300,
          // damping: 10,
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut",
        }}
        className=" text-center mt-6  text-2xl md:text-4xl     "
      >
        I build<FlipWords words={words} className="text-white" />websites
      </motion.div>
    </>
  );
}

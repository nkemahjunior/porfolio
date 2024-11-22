import "@/styles/movingBorder.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroButton() {
  const sharedTransition = { duration: 0.5, delay: 0.2, ease: "easeOut" };
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        y: sharedTransition,
        opacity: sharedTransition,
        scale: { duration: 0.1, ease: "linear" },
      }}
      whileHover={{ scale: 0.95 }}
    >
      <Link
        href={"mailto:nkemahjr@gmail.com"}
        className="   text-2xl   hover:text-gray-400  text-white  flex justify-center items-center    animatedBorder"
      >
        Send Message
      </Link>
    </motion.div>
  );
}

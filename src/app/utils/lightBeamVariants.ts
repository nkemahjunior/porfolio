import { Transition, Variants } from "framer-motion";

const trans:Transition = {
  duration: 0.9,
  delay: 3,
  ease: "linear",
  
  // type: "spring",
  // bounce: 0.7,
};

export const lightBeamVariants: Variants = {
  initialProp: {
    height: ["0rem", "50rem"],
    width: ["0rem", "10rem"],
    top: ["0rem", "-20rem"],
    rotate: [-20, -20],
  },
  small: {
    height: ["0rem", "50rem"],
    width: ["0rem", "10rem"],
    top: ["0rem", "-20rem"],
    rotate: [-20, -20],
    transition: trans,
  },
  medium: {
    height: ["0rem", "90rem"],
    width: ["0rem", "10rem"],
    top: ["0rem", "-40rem"],
    rotate: [-40, -40],
    transition: trans,
  },
  large: {
    height: ["0rem", "110rem"],
    width: ["0rem", "10rem"],
    top: ["0rem", "-50rem"],
    rotate: [-45, -45],
    transition: trans,
  },
  extraLarge: {
    height: ["0rem", "100rem"],
    width: ["0rem", "10rem"],
    top: ["0rem", "-45rem"],
    rotate: [-65, -65],
    transition: trans,
  },
  extraExtraLarge: {
    height: ["0rem", "120rem"],
    width: ["0rem", "10rem"],
    top: ["0rem", "-56rem"],
    rotate: [-70, -70],
    transition: trans,
  },
};

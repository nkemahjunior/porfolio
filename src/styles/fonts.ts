import {
  Rubik_Iso,
  Frijole,
  Fredericka_the_Great,
  Syncopate,
  Lato,
} from "next/font/google";

export const RubikIso = Rubik_Iso({ weight: "400", subsets: ["latin"] });

export const FrijoleF = Frijole({ weight: "400", subsets: ["latin"] });

export const FrederickaTheGreat = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
});

export const SyncopateF = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

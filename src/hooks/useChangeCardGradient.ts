import { useEffect, useState } from "react";

interface fnReturnType {
  gradientColor1: string;
  gradientColor2: string;
  gradientColor3: string;
  currentColorArr: "1" | "2";
}

export default function useChangeCardGradient(colorsT: {
  [key: string]: string[];
}): fnReturnType {
  const [gradientColor1, setGradientColor1] = useState("indigo-500");
  const [gradientColor2, setGradientColor2] = useState("purple-500");
  const [gradientColor3, setGradientColor3] = useState("pink-500");
  const [currentColorArr, setCurrentColorArr] = useState<"1" | "2">("1");

  //   const colorsT = {
  //     "1": ["indigo-500", "purple-500", "pink-500"], // indigo, purple, pink
  //     "2": ["indigo-500", "sky-500", "emerald-500"], // blue, sky, green
  //   };

  //   const colors = {
  //     "1": ["#4F46E5", "#9333EA", "#EC4899"], // indigo, purple, pink
  //     "2": ["#1E40AF", "#0284C7", "#10B981"], // blue, sky, green
  //   };

  useEffect(() => {
    const interval = setTimeout(() => {
      const currentColors = colorsT[currentColorArr];
      setGradientColor1(currentColors[0]);
      setGradientColor2(currentColors[1]);
      setGradientColor3(currentColors[2]);

      setCurrentColorArr((prev) => (prev === "1" ? "2" : "1"));
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentColorArr, colorsT]);

  return { gradientColor1, gradientColor2, gradientColor3, currentColorArr };
}

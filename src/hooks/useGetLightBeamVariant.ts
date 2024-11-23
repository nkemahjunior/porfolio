import { useEffect, useState } from "react";

export function useGetLightBeamVariant() {
  const [variant, setVariant] = useState("initialProp");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) setVariant("extraExtraLarge");
      else if (width >= 1280) setVariant("extraLarge");
      else if (width >= 1024) setVariant("large");
      else if (width >= 768) setVariant("medium");
      else setVariant("small");
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return variant;
}

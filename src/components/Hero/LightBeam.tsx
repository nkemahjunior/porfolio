 
 
import "@/styles/hero.css";

export default function LightBeam() {
    return (
      //nav bar z-49 cos nav is z-50
      <div
        className=" 
         bg-gray-500  shadow-red-700   absolute blur-[80px]  animate-lightBeam "
      ></div>
    );
}


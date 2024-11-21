import { RubikIso } from "@/styles/fonts";
import Link from "next/link";

 
 
export default function () {
    return (
      <ul className=" h-full lg:h-auto flex items-center lg:flex-none">
        <li>
          <Link
            href={"#"}
            className={`${RubikIso.className} text-7xl md:text-8xl   lg:text-8xl`}
          >
            Z
          </Link>
        </li>
      </ul>
    );
}
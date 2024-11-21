import { FrijoleF } from "@/styles/fonts";
import Link from "next/link";


interface fnProps{
    showNavMobile: boolean
}
 
 
export default function NavLinks ({showNavMobile}:fnProps) {
    return (
      <ul
        className={`${
          FrijoleF.className
        } lg:space-x-6 absolute top-0 lg:static flex flex-col lg:flex-row space-y-12 pl-2 md:pl-16  lg:pl-0 pt-8 md:pt-16 lg:pt-0 lg:space-y-0 bg-black lg:bg-inherit  border-emerald-500 border-0 border-solid inset-0 lg:inset-auto mt-[5rem] lg:mt-0 z-50 lg:z-0  ${
          showNavMobile ? "" : "hidden lg:flex "
        }`}
        //   onClick={() => setShowNavMobile(false)}
      >
        <li>
          <Link
            href={"#"}
            className=" hover:text-gray-400 duration-300 delay-75"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className=" hover:text-gray-400 duration-300 delay-75"
          >
            My Services
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className=" hover:text-gray-400 duration-300 delay-75"
          >
            My Projects
          </Link>
        </li>
        {/* <li>
          <Link
            href={"#"}
            className=" hover:text-gray-400 duration-300 delay-75"
          >
            About Me
          </Link>
        </li> */}
      </ul>
    );
}
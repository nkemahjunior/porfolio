import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" w-full flex justify-center space-x-8 md:space-x-12 lg:space-x-16 mt-20 md:mt-24 mb-4">
      <Link
        href="https://x.com/Zeco_Junior"
        className=" hover:scale-95 transition-transform duration-300  "
      >
        {" "}
        <BsTwitterX size={30} />
      </Link>
      <Link
        href="https://www.linkedin.com/nkemahjunior"
        className=" hover:scale-95 transition-transform duration-300  "
      >
        {" "}
        <BsLinkedin size={30} />
      </Link>
      <Link
        href="https://github.com/nkemahjunior"
        className=" hover:scale-95 transition-transform duration-300  "
      >
        {" "}
        <BsGithub size={30} />
      </Link>
    </div>
  );
}

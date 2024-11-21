import Link from "next/link";

 
 
export default function AboutMe() {
    return (
      <div className="  mt-16 md:mt-20 w-full space-y-8  ">
        <div className=" space-y-2">
          <p className=" text-center text-4xl md:text-6xl ">
            Have a project in mind?
          </p>
          <p className=" text-center text-2xl md:text-3xl">
            I am ready to work!
          </p>
        </div>
        <div className=" w-full flex justify-center">
          <Link
            href={"mailto:nkemahjr@gmail.com"}
            className="h-[3.5rem] w-[15rem] lg:w-[20rem] rounded-sm bg-white text-black flex justify-center items-center  hover:scale-95 transition-transform duration-300 hover:bg-gray-400"
          >
            Contact me
          </Link>
        </div>
      </div>
    );
}
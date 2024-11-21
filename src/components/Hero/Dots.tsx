import "@/styles/movingDots.css";

export default function Dots() {
  return (
    <div className=" border-solid border-0 absolute border-yellow-700 w-full flex flex-col space-y-8 justify-center items-center space-x-2 z-[0] top-0 h-full">
      <div className="flex space-x-4">
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound1   "></div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound2  "></div>
        <div className=" h-3 w-3   bg-[rgba(229,231,235,0.2)] rounded-full moveRound3 flex justify-center items-center  ">
          <div className=" h-1 w-1    rounded-full  bg-gray-300  "></div>
        </div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound4 "></div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound5  "></div>
        <div className=" h-3 w-3   bg-[rgba(229,231,235,0.2)] rounded-full moveRound6 flex justify-center items-center  ">
          <div className=" h-1 w-1    rounded-full  bg-gray-300  "></div>
        </div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound7  "></div>
        <div className=" h-3 w-3   bg-[rgba(229,231,235,0.2)] rounded-full moveRound8 flex justify-center items-center  ">
          <div className=" h-1 w-1    rounded-full  bg-gray-300  "></div>
        </div>
        <div className=" h-3 w-3   bg-[rgba(229,231,235,0.2)] rounded-full moveRound9 flex justify-center items-center  ">
          <div className=" h-1 w-1    rounded-full  bg-gray-300  "></div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound10  "></div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound11  "></div>
        <div className=" h-3 w-3   bg-[rgba(229,231,235,0.2)] rounded-full moveRound12 flex justify-center items-center  ">
          <div className=" h-1 w-1    rounded-full  bg-gray-300  "></div>
        </div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound13  "></div>
        <div className=" h-1 w-1 bg-gray-300 rounded-full moveRound14  "></div>
        <div className=" h-3 w-3   bg-[rgba(229,231,235,0.2)] rounded-full moveRound15 flex justify-center items-center  ">
          <div className=" h-1 w-1    rounded-full  bg-gray-300  "></div>
        </div>
      </div>
    </div>
  );
}

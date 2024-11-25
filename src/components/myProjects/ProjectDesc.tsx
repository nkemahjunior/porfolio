import ProjectButton from "./ProjectButton";
import ProjectUnderDevelopmentBtn from "./ProjectUnderDevelopmentBtn";

interface fnProps {
  underDevelopment: boolean;
  cardDesc: string;
  githubLink: string;
  liveLink: string;
}

export default function ProjectDesc({
  underDevelopment,
  cardDesc,
  githubLink,
  liveLink,
}: fnProps) {
  return (
    <div className=" w-full flex justify-center">
      <div className="w-full  md:w-[60%] space-y-6">
        <p className=" text-center ">{cardDesc}</p>

        <div className=" flex w-full justify-center space-x-4 md:space-x-6 text-black  ">
          <ProjectButton link={githubLink}>View Source</ProjectButton>
          {underDevelopment ? (
            <ProjectUnderDevelopmentBtn />
          ) : (
            <ProjectButton link={liveLink}>Live</ProjectButton>
          )}
        </div>
      </div>
    </div>
  );
}

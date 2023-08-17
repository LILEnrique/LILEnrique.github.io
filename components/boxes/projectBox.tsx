import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { projectsData } from "@/types/generalTypes";

type ProjectProps = (typeof projectsData)[number];

interface PostCardProps {
  project: ProjectProps;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  isPostHero?: boolean;
}

const ProjectBox = ({ project, direction, reverse, isPostHero }: PostCardProps) => {
  return (
    <div
      className={`px-8 py-8 md:py-10 md:px-10 text-left p-5 rounded-lg shadow-md backdrop-blur-md bg-primaryWhite/20 dark:bg-primaryBlack/20 borderBW ${
        direction === "horizontal" ? "grid grid-cols-1 items-center gap-10 md:grid-cols-2 " : " space-y-4 "
      }`}
    >
      <>
        <Image
          className={` h-auto max-h-[300px] w-full rounded-xl object-cover object-center ${reverse ? " md:order-last " : ""}}`}
          width={600}
          height={400}
          alt={project.title}
          src={project.imageUrl}
        />

        <div>
          <div className=" xl:col-row-3 space-y-2">
            <h2
              className={`leading-8 tracking-tight  ${isPostHero ? "text-lg font-bold sm:text-xl" : "text-md font-semibold sm:text-lg "}`}
            >
              {project.title}
            </h2>
            <p className="leading-normal text-zinc-500 dark:text-zinc-400">{project.description}</p>
            <div className="flex flex-wrap gap-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  className="borderBW rounded-lg px-1.5 py-1 capitalize text-primaryLight dark:text-primaryDark break-words"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link href={project.projectLink ? project.projectLink : "#"} target="_blank" rel="noopener noreferrer" className="mt-4 flex">
            <div
              style={{
                backgroundImage: "radial-gradient(100% 1338.07% at 4.85% 0%, #8B74F6 0%, #B4E5DC 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient 5s ease-out infinite",
              }}
              className=" p-[2px] rounded-lg shadow-md relative w-44 "
            >
              {/* Content */}

              <div className="shadow-lg group hover:scale-105 duration-150 transition-all ease-out flex items-center justify-center px-5 py-3 font-medium rounded-lg bg-zinc-800 hover:bg-zinc-900 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100">
                Ver proyecto{" "}
                <span className="ml-1 group-hover:-rotate-45 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </>
    </div>
  );
};

export default ProjectBox;

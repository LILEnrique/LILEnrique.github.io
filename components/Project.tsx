"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, projectLink }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 px-2 drop-shadow-sm "
    >
      <section className="bg-zinc-50 hover:bg-zinc-100 hover:bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-5 dark:hover:bg-opacity-10 max-w-[42rem] border border-black border-opacity-10 dark:border-white dark:border-opacity-10 rounded-xl overflow-hidden sm:pr-5 relative sm:h-[20.5rem]  transition sm:group-even:pl-8 ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-extrabold primaryText  ">
            {title}
            <span className="text-primary dark:invert">.</span>
          </h3>
          <p className="mt-2 text-sm">{description}</p>
          <ul className="flex flex-wrap py-2 gap-1 my-auto">
            {tags.map((tag, index) => (
              <li className="bg-zinc-800 text-zinc-50 text-xs dark:bg-zinc-200  dark:text-zinc-950 px-2 py-1  rounded-xl " key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center  justify-center text-zinc-900  gap-2 h-[3rem] w-full hover:text-zinc-100 dark:hover:text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-50 bg-primary rounded-xl transition-all  hover:scale-105 font-medium "
          >
            Ver proyecto{" "}
            <span>
              <AiOutlineArrowRight className="font-medium  group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1 " />
            </span>
          </a>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-xl shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

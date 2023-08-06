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
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 px-2"
    >
      <section className=" bg-zinc-600 bg-opacity-10 hover:bg-opacity-10 max-w-[42rem] border border-white/10 rounded-xl overflow-hidden sm:pr-5 relative sm:h-[20.5rem]  transition sm:group-even:pl-8 ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60  ">
            {title}
            <span className="text-primary ">.</span>
          </h3>
          <p className="mt-2 text-sm text-zinc-300">{description}</p>
          <ul className="flex flex-wrap py-2 gap-1 my-auto">
            {tags.map((tag, index) => (
              <li className="bg-zinc-600 bg-opacity-20 px-2 py-1 text-xs text-zinc-300 rounded-xl " key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className=" group flex items-center  justify-center  gap-2 h-[3rem] w-full text-zinc-950 hover:bg-zinc-50 bg-primary rounded-xl transition-all  hover:scale-105 font-medium "
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

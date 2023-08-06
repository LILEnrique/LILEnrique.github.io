"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28  text-center sm:mb-40">
      <h2 className="pb-4 text-4xl font-black text-transparent bg-clip-text  bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 text-center ">
        Habilidades técnicas<span className="text-primary ">.</span>
      </h2>
      <p className="pb-12 text-lg text-zinc-300">
        Estas son algunas de las tecnologías y herramientas con las que he trabajado durante mi transcurso académico y profesional.
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group rounded-xl px-5 py-3 bg-zinc-600 bg-opacity-10 hover:bg-opacity-20 text-zinc-300 hover:text-primary border border-white/10 flex items-center justify-center gap-1 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="whileInView"
            custom={index}
          >
            {skill.name} <span className="text-xl">{skill.icon}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

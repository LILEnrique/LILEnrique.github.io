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
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28  text-center sm:mb-40">
      <h2 className="pb-4 text-4xl font-black primaryText text-center">
        Habilidades técnicas<span className="text-primary dark:invert">.</span>
      </h2>
      <p className="pb-12 text-lg">
        Estas son algunas de las tecnologías y herramientas con las que he trabajado durante mi transcurso académico y profesional.
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group drop-shadow-sm rounded-xl  px-5 py-3  dark:hover:bg-opacity-20 hover:text-primary borderBW flex items-center justify-center gap-1 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.name} <span className="text-xl">{skill.icon}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

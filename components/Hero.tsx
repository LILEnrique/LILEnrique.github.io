"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Particles from "./Particles";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useSectionInView("Inicio", 0.5);

  return (
    <section ref={ref} id="home" className="flex flex-col justify-center h-screen sm:mb-0 scroll-mt-[100rem]  max-w-5xl px-4 sm:px-0 ">
      <Particles className="absolute inset-0 -z-10 " />
      <motion.div className="space-y-2 pt-6 pb-8" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="primaryText text-xl font-extrabold leading-11 tracking-tight  sm:text-2xl sm:leading-10 md:text-2xl md:leading-14 -mb-2  md:leading-14">
          Hola, mi nombre es
        </h2>
        <h1 className="primaryText py-2 text-4xl font-black leading-11 tracking-tight  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
          Enrique Cayupan<span className="text-primary dark:invert">.</span>
        </h1>
        <p className="pt-5  md:text-lg  ">
          Ingeniero civil informático apasionado por crear soluciones que impulsen el mundo digital, siempre buscando agregar valor y
          resolver problemas de manera innovadora en cada proyecto que emprendo.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-start gap-2  text-lg font-medium max-w-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#about"
          className=" px-7 py-3 flex items-center gap-2 rounded-xl outline-none w-full justify-center hover:scale-105 whitespace-nowrap transition duration-150 ease-in-out font-medium text-zinc-900 hover:text-zinc-100 dark:hover:text-zinc-900 bg-primary hover:bg-zinc-900 dark:hover:bg-zinc-100 group"
        >
          Conoceme{" "}
          <AiOutlineArrowRight className=" tracking-normal   group-hover:rotate-90 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 " />
        </Link>

        <Link
          className="w-full justify-center px-7 py-3 bg-zinc-800 hover:bg-zinc-900 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100  whitespace-nowrap  duration-150 ease-in-out font-medium   flex items-center gap-2 rounded-xl outline-none  hover:scale-105 transition cursor-pointer group "
          href="#contact"
        >
          Contactame{" "}
          <span>
            <AiOutlineMail className=" tracking-normal  group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1 " />
          </span>
        </Link>
        <div className="flex sm:flex-row gap-2">
          <a
            className="p-4 bg-zinc-800 hover:bg-zinc-900 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100 outline-none flex items-center gap-2 rounded-xl hover:scale-105 transition cursor-pointer"
            href="https://www.linkedin.com/in/enriquefcc/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="p-4 bg-zinc-800 hover:bg-zinc-900 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100 outline-none flex items-center gap-2 rounded-xl hover:scale-105 transition cursor-pointer "
            href="https://github.com/LILEnrique"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

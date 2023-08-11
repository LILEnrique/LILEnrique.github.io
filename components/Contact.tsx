"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  const scrollElementsShow = {
    initial: { y: 0, opacity: 0, scale: 0.9 },
    whileInView: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  };

  return (
    <section id="contact" ref={ref} className="mb-28 sm:mb-40 w-[min(100%,38rem)] ">
      <div className="w-full md:order-none text-center">
        <div>
          <h2 className="pb-4 text-4xl font-black primaryText text-center ">
            Contacto<span className="text-primary dark:invert ">.</span>
          </h2>
          <p className="pb-12 text-lg">Puedes contactarte conmigo mediante un correo, estaré encantado de responderte.</p>
        </div>
      </div>
      <motion.form
        className="flex flex-col px-2"
        method="POST"
        action="https://getform.io/f/b98c7ba3-1428-4817-9abe-e601c0579d40"
        variants={scrollElementsShow}
        initial="initial"
        whileInView="whileInView"
      >
        <input
          className="h-14 px-4 rounded-xl borderBW dark:bg-zinc-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none"
          name="name"
          type="text"
          required
          maxLength={500}
          placeholder="Nombre"
        />
        <input
          className="mt-3 h-14 px-4 rounded-xl borderBW dark:bg-zinc-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-xl borderBW dark:bg-zinc-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Mensaje"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center  gap-2 h-[3rem] w-[8rem] text-zinc-900 hover:text-zinc-100 dark:hover:text-zinc-900 bg-primary hover:bg-zinc-900 dark:hover:bg-zinc-100 rounded-xl outline-none transition-all  hover:scale-105 drak:hover:bg-gray-100 font-medium"
        >
          Contactar <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </motion.form>
    </section>
  );
}

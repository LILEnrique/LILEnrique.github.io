"use client";

import React from "react";
import { motion } from "framer-motion";
import Profile from "@/public/AboutPhoto.jpg";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mí");
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
    <section className="mb-28 leading-8 sm:mb-40 scroll-mt-28 " id="about" ref={ref}>
      <div className="relative max-w-5xl px-4 mx-auto ">
        <div>
          {/* Section content */}
          <div className="flex flex-col md:flex-row items-center max-w-xl mx-auto md:max-w-none gap-10 md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
            {/* Image */}
            <motion.div
              className="z-10 flex-none"
              variants={scrollElementsShow}
              initial="initial"
              whileInView="whileInView"
              viewport={{
                once: true,
              }}
            >
              <Image
                src={Profile}
                alt="PerfilPhoto"
                style={{ borderRadius: "67% 33% 61% 39% / 47% 30% 70% 53%" }}
                className="md:w-80 sm:w-72 p-4"
              />
              <div className="flex flex-col justify-center mt-8 ">
                <p className="text-xl font-semibold leading-8 tracking-tight text-center">
                  Ingeniero Civil Informático<span className="text-primary ">.</span>
                </p>
                <p className="text-xl leading-8 tracking-tight text-gray-600 dark:text-gray-400  text-center">Desarrollador de software.</p>
              </div>
            </motion.div>
            {/* Content */}
            <motion.div
              className="order-1 md:w-7/12 lg:w-1/2 md:order-none "
              variants={scrollElementsShow}
              initial="initial"
              whileInView="whileInView"
              viewport={{
                once: true,
              }}
            >
              <h2 className="primaryText pb-4 text-4xl font-black text-center ">
                Sobre mí
                <span className="text-primary dark:invert ">.</span>
              </h2>
              {/* Content #1 */}
              <p className="mt-8 mb-4 ">
                Soy un <strong>Ingeniero Civil Informático</strong> egresado de la <strong>Universidad Católica de Temuco</strong>. Poseo
                habilidades tanto en el desarrollo de front-end como en el de back-end, así como en la integración de bases de datos y en la
                seguridad de aplicaciones, utilizando diversas tecnologías y metodologías ágiles.
              </p>
              <p className="mb-4 ">
                También me preocupo por otros aspectos del desarrollo de proyectos, como la planificación, la comunicación efectiva y la
                gestión de recursos. Mi pasión por la gestión de proyectos y el trabajo en equipo me ha permitido adquirir valiosas
                habilidades de liderazgo.
              </p>
              <p className="mb-4 ">
                <span className="text-primary ">[</span>Siempre estoy en busca de nuevas formas de mejorar mis habilidades y conocimientos
                para entregar lo mejor de mí en cada proyecto, desafío o meta que me proponga
                <span className="text-primary ">]</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

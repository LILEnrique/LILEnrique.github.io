"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import PaddingContainer from "../layouts/paddingContainer";
import ProjectBox from "../boxes/projectBox";
import { projectsData } from "@/types/generalTypes";
import BgSection from "@/public/bg-section.png";

const Projects = () => {
  return (
    <section id="projects" className="relative pt-10 pb-20 sm:pb-32 sm:text-center bg-bgBlack">
      {/* Background */}
      <Image
        className="z-0 object-cover object-center rotate-180 brightness-125 contrast-200"
        src={BgSection}
        alt="Hero BG"
        fill
      />
      <div className="absolute inset-0 z-10 opacity-20" />
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-primaryWhite via-primaryWhite/80 to-primaryWhite dark:from-primaryBlack dark:via-primaryBlack/80 dark:to-primaryBlack" />

      <PaddingContainer>
        <div className="mt-8 z-30 relative space-y-12">
          {/* Proyectos horizontales (0-2) */}
          {projectsData.slice(0, 3).map((project, index) => {
            const ref = useRef(null);
            const { scrollYProgress } = useScroll({
              target: ref,
              offset: ["start 0.8", "start 0.4"],
            });

            const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
            const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

            return (
              <motion.div key={index} ref={ref} style={{ opacity, y }}>
                <ProjectBox isPostHero direction="horizontal" reverse={index === 0} project={project} />
              </motion.div>
            );
          })}

          {/* Proyectos verticales (3+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projectsData.slice(3).map((project, index) => {
              const ref = useRef(null);
              const { scrollYProgress } = useScroll({
                target: ref,
                offset: ["start 0.8", "start 0.4"],
              });

              const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
              const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

              return (
                <motion.div key={index} ref={ref} style={{ opacity, y }}>
                  <ProjectBox isPostHero direction="vertical" project={project} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Projects;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import PaddingContainer from "../layouts/paddingContainer";
import ProjectBox from "../boxes/projectBox";
import { projectsData } from "@/types/generalTypes";
import BgSection from "@/public/bg-section.png";

const Projects = () => {
  const featuredRef = useRef(null);
  const regularRef = useRef(null);
  const { scrollYProgress: featuredProgress } = useScroll({
    target: featuredRef,
    offset: ["center end", "end end"],
  });

  const { scrollYProgress: regularProgress } = useScroll({
    target: regularRef,
    offset: ["center end", "end end"],
  });

  const fadeInFeatured = useTransform(featuredProgress, [0, 1], [0, 1]);
  const slideInFeatured = useTransform(featuredProgress, [0, 1], [50, 0]);
  const fadeInRegular = useTransform(regularProgress, [0, 1], [0, 1]);
  const slideInRegular = useTransform(regularProgress, [0, 1], [50, 0]);

  const regularBoxes = projectsData.slice(2, 6);
  return (
    <section id="projects" className="relative pt-10 pb-20 sm:pb-32 sm:text-center bg-bgBlack">
      {/* Bacgkround */}
      <Image className="z-0 object-cover object-center rotate-180 brightness-125 contrast-200" src={BgSection} alt="Hero BG" fill />
      {/* Overlay for Backdrop Blur */}
      <div className="absolute inset-0 z-10 opacity-20 " />
      {/* Backgorund Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-primaryWhite via-primaryWhite/80 to-primaryWhite dark:from-primaryBlack dark:via-primaryBlack/80 dark:to-primaryBlack" />
      <PaddingContainer>
        <div className="mt-8 space-y-8 z-30 relative">
          <motion.div
            ref={featuredRef}
            style={{
              opacity: fadeInFeatured,
              y: slideInFeatured,
            }}
          >
            <ProjectBox isPostHero reverse direction="horizontal" project={projectsData[0]} />
          </motion.div>
          <motion.div
            ref={regularRef}
            style={{
              opacity: fadeInRegular,
              y: slideInRegular,
            }}
          >
            <ProjectBox isPostHero direction="horizontal" project={projectsData[1]} />
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {regularBoxes.map((project, index) => (
              <ProjectBox isPostHero direction="vertical" project={project} key={index} />
            ))}
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
};

export default Projects;

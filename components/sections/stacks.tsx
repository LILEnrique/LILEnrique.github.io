"use client";
import { Tech } from "@/types/generalTypes";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import FeaturedBox from "../boxes/featuredBox";
import RegularBox from "../boxes/regularBox";
import LogoLink from "../elements/techLogo";
import PaddingContainer from "../layouts/paddingContainer";
import BgSection from "@/public/bg-section.png";

const Stacks = () => {
  const featuredRef = useRef(null);
  const regularRef = useRef(null);
  const regularRef2 = useRef(null);
  const { scrollYProgress: featuredProgress } = useScroll({
    target: featuredRef,
    offset: ["center end", "end end"],
  });

  const { scrollYProgress: regularProgress } = useScroll({
    target: regularRef,
    offset: ["center end", "end end"],
  });

  const { scrollYProgress: regularProgress2 } = useScroll({
    target: regularRef2,
    offset: ["center end", "end end"],
  });

  const fadeInFeatured = useTransform(featuredProgress, [0, 1], [0, 1]);
  const slideInFeatured = useTransform(featuredProgress, [0, 1], [50, 0]);
  const fadeInRegular = useTransform(regularProgress, [0, 1], [0, 1]);
  const slideInRegular = useTransform(regularProgress, [0, 1], [50, 0]);
  const fadeInRegular2 = useTransform(regularProgress2, [0, 1], [0, 1]);
  const slideInRegular2 = useTransform(regularProgress2, [0, 1], [50, 0]);

  // Initial Animation
  const initialAnimation = {
    hidden: { y: 20 },
    visible: {
      y: 0,

      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="skills" className="relative pt-20 pb-10 sm:pt-32 sm:pb-10 sm:text-center bg-primaryWhite dark:bg-primaryBlack">
      {/* Bacgkround */}
      <Image className="z-0 object-cover object-center brightness-125 contrast-200" src={BgSection} alt="Hero BG" fill />
      {/* Overlay for Backdrop Blur */}
      <div className="absolute inset-0 z-10 opacity-20 " />
      {/* Backgorund Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-primaryWhite via-primaryWhite/80 to-primaryWhite dark:from-primaryBlack dark:via-primaryBlack/80 dark:to-primaryBlack" />
      <PaddingContainer>
        <motion.div variants={initialAnimation} initial="hidden" animate="visible" className="relative z-30">
          <div className="relative z-30 grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            <motion.div
              ref={featuredRef}
              style={{
                opacity: fadeInFeatured,
                y: slideInFeatured,
              }}
              className="sm:col-span-2"
            >
              <FeaturedBox>
                <h2 className="text-2xl sm:text-3xl font-semibold ">Stack de habilidades</h2>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Estas son algunas de las tecnologías y herramientas con las que he trabajado durante mi transcurso académico y
                  profesional. Actualmente con lo que más trabajo es con <span className="font-medium "> Python,</span>
                  <span className="font-medium "> NodeJS</span>,<span className="font-medium "> React</span> y
                  <span className="font-medium "> NextJS</span>.
                </p>
                {/* Logos */}
                <div className="flex flex-wrap items-center justify-start gap-2 mt-6">
                  <LogoLink tech={Tech.Python} />
                  <LogoLink tech={Tech.JavaScript} />
                  <LogoLink tech={Tech.React} />
                  <LogoLink tech={Tech.Next} />
                  <LogoLink tech={Tech.PHP} />
                  <LogoLink tech={Tech.Java} />
                  <LogoLink tech={Tech.HTML} />
                  <LogoLink tech={Tech.CSS} />
                  <LogoLink tech={Tech.NodeJS} />
                  <LogoLink tech={Tech.GitHub} />
                  <LogoLink tech={Tech.SQLServer} />
                </div>
              </FeaturedBox>
            </motion.div>
            <motion.div
              ref={regularRef}
              style={{
                opacity: fadeInRegular,
                y: slideInRegular,
              }}
              className="h-full"
            >
              <RegularBox>
                <div className="container">
                  <h2 className="text-2xl font-semibold">Me gusta trabajar con</h2>
                  <p className="sm:text-sm text-zinc-600 dark:text-zinc-300">
                    Estas son algunas tecnologías, librerías y herramienta que me gusta mucho integrar en mis proyectos.
                  </p>
                  {/* Logos */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <LogoLink tech={Tech.MongoDB} />
                    <LogoLink tech={Tech.Framer} />
                    <LogoLink tech={Tech.Tailwind} />
                    <LogoLink tech={Tech.AntDesign} />
                    <LogoLink tech={Tech.MaterialUI} />
                    <LogoLink tech={Tech.Figma} />
                    <LogoLink tech={Tech.MySQL} />
                  </div>
                </div>
              </RegularBox>
            </motion.div>
            <motion.div
              ref={regularRef2}
              style={{
                opacity: fadeInRegular2,
                y: slideInRegular2,
              }}
              className="h-full"
            >
              <RegularBox>
                <h2 className="text-2xl font-semibold">Aprendiendo</h2>
                <p className="sm:text-sm text-zinc-600 dark:text-zinc-300">
                  Como parte de mi proceso continuo de aprendizaje, me gusta estar en constante búsqueda de nuevos conocimientos.
                </p>
                {/* Logos */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <LogoLink tech={Tech.Typescript} />
                  <LogoLink tech={Tech.Vercel} />
                  <LogoLink tech={Tech.Firebase} />
                  <LogoLink tech={Tech.Astro} />
                </div>
              </RegularBox>
            </motion.div>
          </div>
        </motion.div>
      </PaddingContainer>
    </section>
  );
};

export default Stacks;

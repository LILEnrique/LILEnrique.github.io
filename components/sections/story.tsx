"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ReadMoreButton from "../buttons/readMoreButton";
import PaddingContainer from "../layouts/paddingContainer";

interface StoryProps {
  openPopupHandler: () => void;
}

const Story = ({ openPopupHandler }: StoryProps) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"],
  });

  const fadeIn = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const slideIn = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section id="about" className="relative text-center mt-8 scroll-m-20">
      <PaddingContainer>
        <motion.div
          ref={containerRef}
          style={{
            opacity: fadeIn,
            y: slideIn,
            scale: scaleUp,
          }}
          className="px-8 py-20 rounded-lg borderBW sm:py-32 "
        >
          <h2 className="text-4xl font-bold">Acerca de mí</h2>
          {/* Teaser Paragraph */}
          <div className="relative max-w-lg mx-auto mt-6 mb-10 ">
            {/* Overlay */}
            <div className="absolute inset-0  bg-gradient-to-b from-transparent via-primaryWhite/30 to-primaryWhite/50 dark:from-transparent dark:via-primaryBlack/30 dark:to-primaryBlack/70" />
            <p className="text-lg">
              Soy un <strong>Ingeniero Civil Informático</strong> egresado de la <strong>Universidad Católica de Temuco</strong>. Poseo
              habilidades tanto en el desarrollo de front-end como en el de back-end, así como en la integración de bases de datos y en la
              seguridad de aplicaciones, utilizando diversas tecnologías y metodologías ágiles.
            </p>
          </div>
          {/* Button */}
          <ReadMoreButton openPopupHandler={openPopupHandler} />
        </motion.div>
      </PaddingContainer>
    </section>
  );
};

export default Story;

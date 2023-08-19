"use client";

import React, { useState } from "react";
import PaddingContainer from "./layouts/paddingContainer";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import useScroll from "./utils/useScroll";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

export default function Header() {
  const { inTop } = useScroll();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-primaryWhite bg-opacity-80  py-4 backdrop-blur-[0.5rem] duration-300  dark:border-b dark:bg-primaryBlack dark:bg-opacity-75 ${
        inTop ? "border-b-transparent" : "borderbBW "
      }`}
    >
      <PaddingContainer>
        <motion.div
          className="flex h-12 items-center justify-between"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        >
          <Link href="#hero" className="transition-all hover:scale-[1.15] active:scale-105">
            <Image src={Logo} className="dark:invert" width={50} alt="Logo" priority />
          </Link>
          {/* Desktop navigation */}
          <nav className="flex font-medium ">
            <ul className="hidden grow flex-wrap items-center justify-end text-[0.9rem] md:flex  ">
              <li className="relative flex h-3/4 items-center justify-center px-2 transition-all hover:scale-[1.15] active:scale-105">
                <Link href="#about">Sobre mí</Link>
              </li>
              <li className="relative flex h-3/4 items-center justify-center px-2 transition-all hover:scale-[1.15] active:scale-105">
                <Link href="#skills">Habilidades</Link>
              </li>
              <li className="relative flex h-3/4 items-center justify-center px-2 transition-all hover:scale-[1.15] active:scale-105">
                <Link href="#projects">Proyectos</Link>
              </li>
              <li className="relative flex h-3/4 items-center justify-center transition-all hover:scale-[1.15] active:scale-105 px-2">
                <ThemeToggle />
              </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className="hover:text-primary z-10  md:hidden">
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
              className={`${
                !nav
                  ? "hidden"
                  : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primaryWhite dark:bg-primaryBlack "
              } `}
            >
              <li className="hover:text-primary py-6  text-2xl">
                <Link href="#about" onClick={handleClick}>
                  Sobre mí
                </Link>
              </li>
              <li className="hover:text-primary py-6  text-2xl">
                <Link href="#skills" onClick={handleClick}>
                  Habilidades
                </Link>
              </li>
              <li className="hover:text-primary py-6  text-2xl">
                <Link href="#projects" onClick={handleClick}>
                  Proyectos
                </Link>
              </li>
              <li className="hover:text-primary py-6 ">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </motion.div>
      </PaddingContainer>
    </div>
  );
}

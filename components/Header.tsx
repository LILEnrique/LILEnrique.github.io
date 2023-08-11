"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { activeSection, setActiveSection } = useActiveSectionContext();
  return (
    <header className="fixed z-30 w-full items-center py-2  bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-zinc-100 dark:bg-background">
      <motion.div
        className="max-w-5xl px-4 sm:px-0 mx-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      >
        <div className="flex items-center justify-between h-16 md:h-14">
          <motion.a
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.2 },
            }}
            href="#home"
            className="mr-4 group"
          >
            <Image src={Logo} className="opacity-90 dark:invert" width={60} alt="Logo" />
          </motion.a>
          {/* Desktop navigation */}
          <nav className="flex font-medium ">
            <ul className="hidden md:flex flex-wrap items-center justify-end grow text-[0.9rem]  ">
              {links.map((link, index) =>
                index === 0 ? null : (
                  <li className="h-3/4 flex items-center justify-center relative  px-2" key={link.hash}>
                    <Link
                      className={clsx("flex w-full items-center justify-center transition  hover:text-primary ", {
                        "text-primary ": activeSection === link.name,
                      })}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10  hover:text-primary  text-lg">
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
              className={`${
                !nav
                  ? "hidden"
                  : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-zinc-100 dark:bg-background"
              } `}
            >
              {links.map((link, index) =>
                index === 0 ? null : (
                  <li className="py-6 text-2xl  hover:text-primary  duration-500" key={link.hash}>
                    <Link href={link.hash} onClick={handleClick}>
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}

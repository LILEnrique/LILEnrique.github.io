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
    <header className="fixed z-30 w-full items-center py-2  bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  bg-background   ">
      <motion.div className="max-w-5xl px-4 sm:px-0 mx-auto" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <div className="flex items-center justify-between h-16 md:h-14">
          <motion.a
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
            href="#home"
            className="mr-4 group"
          >
            <Image src={Logo} className=" opacity-90" width={50} alt="Logo" />
          </motion.a>
          {/* Desktop navigation */}
          <nav className="flex font-medium text-md ">
            <ul className="hidden md:flex flex-wrap items-center justify-end grow text-zinc-300 ">
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
            <div onClick={handleClick} className="md:hidden z-10 text-zinc-300 hover:text-primary  text-lg">
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
              className={`${
                !nav
                  ? "hidden"
                  : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-background text-zinc-300"
              } `}
            >
              {links.map((link, index) =>
                index === 0 ? null : (
                  <motion.li
                    className="py-6 text-2xl  hover:text-primary  duration-500"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <Link href={link.hash} onClick={handleClick}>
                      {link.name}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
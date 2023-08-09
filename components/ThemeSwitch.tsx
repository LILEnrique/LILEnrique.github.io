"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 text-zinc-700 dark:text-zinc-300  w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] borderBW shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
    >
      {theme === "light" ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>
  );
}

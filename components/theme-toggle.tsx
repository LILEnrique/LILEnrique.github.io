"use client";

import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button className="relative inline-flex text-xl" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <BiSun className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <BiMoon className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

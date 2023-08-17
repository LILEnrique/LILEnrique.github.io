/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "section-pattern": "url('/pattern.svg')",
        "hero-pattern": "url('/black-pattern.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      },
      colors: {
        primaryWhite: "#FFFFFF",
        primaryBlack: "#15171b",
        primary: "#00ADB5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};

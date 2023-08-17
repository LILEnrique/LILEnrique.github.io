import Weather from "@/public/projects/Weather.png";
import DMA from "@/public/projects/DMA.png";
import Telcon from "@/public/projects/TelC.png";
import Todo from "@/public/projects/Todolist.png";
import MACD from "@/public/projects/MACD.png";
import Cells from "@/public/projects/Cell.png";

export interface OnlyChildrenProps {
  children: React.ReactNode;
}

export enum Tech {
  Python = "Python",
  JavaScript = "JavaScript",
  React = "React",
  Next = "Next.js",
  PHP = "PHP",
  Java = "Java",
  HTML = "HTML",
  CSS = "CSS",
  NodeJS = "Node.js",
  GitHub = "GitHub",
  Tailwind = "TailwindCSS",
  MongoDB = "MongoDB",
  MySQL = "MySQL",
  SQLServer = "SQL Server",
  Framer = "Framer Motion",
  AntDesign = "Ant Design",
  MaterialUI = "Material UI",
  Figma = "Figma",
  Typescript = "TypeScript",
  Vercel = "Vercel",
  Astro = "Astro",
  Firebase = "Firebase",
}

export const certifications = [
  {
    name: "EF SET English Certificate 61/100 (C1 Advance)",
    certificationLink: "https://www.efset.org/cert/KiPNRP",
  },
  {
    name: "UI/UX Design With Figma : 5+ Real World Projects",
    certificationLink: "https://www.udemy.com/certificate/UC-1cd5e9be-4ba4-418b-9b1c-db0b56a2ab21/",
  },
  {
    name: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
    certificationLink: "https://www.udemy.com/certificate/UC-75dbafcf-2eee-4cd4-b824-31e39ccff409/",
  },
  {
    name: "Complete JavaScript, jQuery and React Bootcamp - Hands-On",
    certificationLink: "https://www.udemy.com/certificate/UC-4143e1a3-32a8-42b3-9184-2468e6a3655b/",
  },
  {
    name: "Data Manipulation in Python: Master Python, Numpy & Pandas",
    certificationLink: "https://www.udemy.com/certificate/UC-022b89ef-8d05-40fc-88b9-84d7a1960108/",
  },
  {
    name: "Complete Bootstrap & React Bootcamp with Hands-On Projects",
    certificationLink: "https://www.udemy.com/certificate/UC-ee05b7c4-0612-4e15-b33d-8e584e7ee2fe/",
  },
  {
    name: "HTML, CSS, React - Certification Course for Beginners",
    certificationLink: "https://www.udemy.com/certificate/UC-f7044a75-1d64-439d-a0ee-8553cfa05a5e/",
  },
  {
    name: "Machine Learning: Aplicado a Python y Data Science",
    certificationLink: "https://www.udemy.com/certificate/UC-3c086afe-f3f0-4b57-af7a-4438c0ca8a9b/",
  },
] as const;

export const projectsData = [
  {
    title: "DMA",
    description:
      "Plataforma educativa para docentes. Permite diseñar clases, visualizar gráficos y generar PDF, utilizando la taxonomía de aprendizaje SOLO como base.",
    tags: ["ReactJS", "AntDesign", "TailwindCSS", "MongoDB", "Redux"],
    imageUrl: DMA,
    projectLink: "http://dma2.uct.cl/",
  },
  {
    title: "Weather App",
    description:
      "Aplicación que proporciona información del clima en tiempo real, permite buscar y visualizar informacion de diferentes locaciones del mundo.",
    tags: ["ReactJS", "TailwindCSS", "OpenWeatherMap"],
    imageUrl: Weather,
    projectLink: "https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS",
  },
  {
    title: "Teleprocesos",
    description:
      "Plataforma que ofrece servicios para realizar consultas telemáticas de manera eficiente y segura a las instituciones de salud.",
    tags: ["Java", "ZK", "SQL Server"],
    imageUrl: Telcon,
    projectLink: "",
  },
  {
    title: "MACD",
    description: "Aplicación que permite incorporar dinámicamente nuevos campos en formularios sin alterar la estructura base de una BD.",
    tags: ["PHP", "Laravel", "Bootstrap", "SQL Server"],
    imageUrl: MACD,
    projectLink: "https://github.com/LILEnrique/Modulo-Administrador-De-Campos-Dinamicos",
  },
  {
    title: "Detector de células",
    description:
      "Sistema embebido que mediante técnicas de Machine Learning detecta y categoriza células mediante sus diferentes tamaños y tipos.",
    tags: ["Python", "OpenCV", "Numpy"],
    imageUrl: Cells,
    projectLink: "https://github.com/LILEnrique/Cells",
  },
  {
    title: "Todo App",
    description:
      "Todo App con funcionalidad CRUD que permite gestionar y organizar tareas dinámicamente con almacenamiento y persistencia en tiempo real.",
    tags: ["ReactJS", "TailwindCSS", "Firebase"],
    imageUrl: Todo,
    projectLink: "https://github.com/LILEnrique/Todo-App-ReactJS-TailwindCSS-Firebase",
  },
] as const;

import React from "react";
import Weather from "@/public/projects/WeatherApp.png";
import DMA from "@/public/projects/DMA.png";
import Telcon from "@/public/projects/Telcon.jpeg";
import Todo from "@/public/projects/TodoApp.png";
import MACD from "@/public/projects/MACD.png";
import Cells from "@/public/projects/cells.png";
import { FaPython, FaJs, FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJava, FaFigma } from "react-icons/fa";
import { SiMicrosoftsqlserver, SiFramer, SiAntdesign, SiMui, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandPhp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const skillsData = [
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "JavaScript", icon: React.createElement(FaJs) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(TbBrandNextjs) },
  { name: "PHP", icon: React.createElement(TbBrandPhp) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "GitHub", icon: React.createElement(FaGithub) },
  { name: "TailwindCSS", icon: React.createElement(SiTailwindcss) }, // Placeholder for "TailwindCSS"
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "MySQL", icon: React.createElement(GrMysql) },
  { name: "SQL Server", icon: React.createElement(SiMicrosoftsqlserver) },
  { name: "Framer Motion", icon: React.createElement(SiFramer) },
  { name: "Ant Design", icon: React.createElement(SiAntdesign) },
  { name: "Material UI", icon: React.createElement(SiMui) },
  { name: "Figma", icon: React.createElement(FaFigma) },
] as const;

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mí",
    hash: "#about",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Contacto",
    hash: "#contact",
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
      "Aplicación del clima construida que proporciona información del clima en tiempo real, permite buscar y visualizar informacion de diferentes locaciones.",
    tags: ["ReactJS", "TailwindCSS", "OpenWeatherMap"],
    imageUrl: Weather,
    projectLink: "https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS",
  },
  {
    title: "Teleprocesos",
    description:
      "Plataforma para el área de la salud, ofrece servicios para realizar consultas telemáticas de manera eficiente y segura a las instituciones de salud.",
    tags: ["Java", "ZK", "SQL Server"],
    imageUrl: Telcon,
    projectLink: "",
  },
  {
    title: "MACD",
    description:
      "Aplicación que permite incorporar dinámicamente nuevos campos en formularios sin alterar la estructura base de las tablas de una BD.",
    tags: ["PHP", "Laravel", "Bootstrap", "SQL Server"],
    imageUrl: MACD,
    projectLink: "https://github.com/LILEnrique/Modulo-Administrador-De-Campos-Dinamicos",
  },
  {
    title: "Detector de células",
    description:
      "Sistema embebido que mediante técnicas de Machine Learning genera la detección y categorización de células mediante sus diferentes tamaños y tipos.",
    tags: ["Python", "OpenCV", "Numpy"],
    imageUrl: Cells,
    projectLink: "https://github.com/LILEnrique/Cells",
  },
  {
    title: "Todo App",
    description:
      "Una Todo App con funcionalidad CRUD que permite gestionar y organizar tareas dinámicamente con almacenamiento y persistencia en tiempo real.",
    tags: ["ReactJS", "TailwindCSS", "Firebase"],
    imageUrl: Todo,
    projectLink: "https://github.com/LILEnrique/Todo-App-ReactJS-TailwindCSS-Firebase",
  },
] as const;

import { Tech } from "@/types/generalTypes";
import dynamic from "next/dynamic";
import Tooltip from "./tooltip";

const TypescriptIcon = dynamic(() => import("react-icons/bi").then((mod) => mod.BiLogoTypescript), { ssr: false });
const PythonLogo = dynamic(() => import("react-icons/fa").then((mod) => mod.FaPython), { ssr: false });
const JavascriptIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaJs), { ssr: false });
const ReactIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaReact), { ssr: false });
const NodejsIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaNodeJs), { ssr: false });
const GithubIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaGithub), { ssr: false });
const HTMLIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaHtml5), { ssr: false });
const CSSIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaCss3Alt), { ssr: false });
const JavaIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaJava), { ssr: false });
const FigmaIcon = dynamic(() => import("react-icons/fa").then((mod) => mod.FaFigma), { ssr: false });
const FramerIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiFramer), { ssr: false });
const AntDesignIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiAntdesign), { ssr: false });
const MaterialUIIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiMui), { ssr: false });
const MongoDBIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiMongodb), { ssr: false });
const TailwindCSSIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiTailwindcss), { ssr: false });
const NextjsIcon = dynamic(() => import("react-icons/tb").then((mod) => mod.TbBrandNextjs), { ssr: false });
const PHPLogo = dynamic(() => import("react-icons/tb").then((mod) => mod.TbBrandPhp), { ssr: false });
const MySQLLogo = dynamic(() => import("react-icons/gr").then((mod) => mod.GrMysql), { ssr: false });
const VercelLogo = dynamic(() => import("react-icons/io5").then((mod) => mod.IoLogoVercel), { ssr: false });
const AstroLogo = dynamic(() => import("react-icons/si").then((mod) => mod.SiAstro), { ssr: false });
const FireBaseLogo = dynamic(() => import("react-icons/bi").then((mod) => mod.BiLogoFirebase), { ssr: false });
const ReactNativeIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiReact), { ssr: false });
const ViteIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiVite), { ssr: false });
const FastAPIIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiFastapi), { ssr: false });
const FlaskIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiFlask), { ssr: false });
const PM2Icon = dynamic(() => import("react-icons/si").then((mod) => mod.SiPm2), { ssr: false });
const ExpoIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiExpo), { ssr: false });
const ExpressIcon = dynamic(() => import("react-icons/si").then((mod) => mod.SiExpress), { ssr: false });

const TechLogo = ({ tech }: { tech: Tech }) => {
  // Render logo
  const renderLogo = (tech: Tech) => {
    switch (tech) {
      case Tech.Typescript:
        return <TypescriptIcon />;
      case Tech.Python:
        return <PythonLogo />;
      case Tech.JavaScript:
        return <JavascriptIcon />;
      case Tech.React:
        return <ReactIcon />;
      case Tech.NodeJS:
        return <NodejsIcon />;
      case Tech.GitHub:
        return <GithubIcon />;
      case Tech.HTML:
        return <HTMLIcon />;
      case Tech.CSS:
        return <CSSIcon />;
      case Tech.Java:
        return <JavaIcon />;
      case Tech.Figma:
        return <FigmaIcon />;
      case Tech.Framer:
        return <FramerIcon />;
      case Tech.AntDesign:
        return <AntDesignIcon />;
      case Tech.MaterialUI:
        return <MaterialUIIcon />;
      case Tech.MongoDB:
        return <MongoDBIcon />;
      case Tech.Tailwind:
        return <TailwindCSSIcon />;
      case Tech.Next:
        return <NextjsIcon />;
      case Tech.PHP:
        return <PHPLogo />;
      case Tech.MySQL:
        return <MySQLLogo />;
      case Tech.Vercel:
        return <VercelLogo />;
      case Tech.Astro:
        return <AstroLogo />;
      case Tech.Firebase:
        return <FireBaseLogo />;
      case Tech.ReactNative:
        return <ReactNativeIcon />;
      case Tech.Vite:
        return <ViteIcon />;
      case Tech.FastAPI:
        return <FastAPIIcon />;
      case Tech.Flask:
        return <FlaskIcon />;
      case Tech.PM2:
        return <PM2Icon />;
      case Tech.Expo:
        return <ExpoIcon />;
      case Tech.Express:
        return <ExpressIcon />;
      default:
        return null;
    }
  };

  return (
    <Tooltip content={tech}>
      <div
        id={tech}
        className={`bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 relative z-10 cursor-pointer rounded-lg w-10 h-10 flex  shadow-lg p-[6px] hover:pb-4 duration-150 ease-out transition-all ${"justify-center items-center"}`}
      >
        {renderLogo(tech)}
      </div>
    </Tooltip>
  );
};

export default TechLogo;

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { certifications } from "@/types/generalTypes";
interface PopupProps {
  closePopupHandler: () => void;
}

const Popup = ({ closePopupHandler }: PopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primaryWhite/20 dark:bg-primaryBlack/20 backdrop-blur-sm">
      {/* Clickable Container */}
      <div onClick={closePopupHandler} className="absolute inset-0" />
      {/* Content Container */}
      <div className="relative w-full max-w-xl px-8 mx-8 borderBW rounded-lg text-secondaryWhite bg-primaryWhite dark:bg-primaryBlack ">
        {/* ESC Button */}
        <div className="absolute z-[99] top-4 right-4">
          <button onClick={closePopupHandler} className="px-2 py-1 text-xs  rounded-md bg-[#272727] text-zinc-100 ">
            ESC
          </button>
        </div>

        {/* Backgorund Gradient */}
        <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-b from-primaryWhite via-primaryWhite/80 to-primaryWhite dark:from-primaryBlack dark:via-primaryBlack/80 dark:to-primaryBlack " />
        {/* Text Gradient */}
        {/* Overlay */}
        <div className="absolute inset-0 z-30 rounded-lg pointer-events-none bg-gradient-to-b from-transparent via-primaryWhite/10 to-primaryWhite/60 dark:from-transparent dark:via-primaryBlack/10 dark:to-primaryBlack/80" />
        {/* Content */}
        <div className="relative z-20 max-h-[60vh] leading-relaxed pt-6 overflow-y-scroll scrollbar-none pb-24">
          <h2 className="my-8 mb-4 text-2xl font-semibold">Mi rol como Ingeniero Civil Informático</h2>
          <p className="mb-2 leading-loose">
            Además del desarrollo técnico, me involucro activamente en aspectos clave como la{" "}
            <strong>planificación estratégica</strong>, la <strong>comunicación efectiva</strong> y la{" "}
            <strong>gestión de recursos</strong>. A lo largo de mi experiencia, he cultivado habilidades de{" "}
            <strong>liderazgo</strong> que me permiten trabajar de forma colaborativa, impulsar equipos y mantener
            siempre el enfoque en la calidad y los objetivos del proyecto.
          </p>

          <p className="mb-2 leading-loose">
            <span className="text-primary">[</span>Siempre estoy en busca de nuevas formas de mejorar mis habilidades y
            conocimientos para entregar lo mejor de mí en cada proyecto, desafío o meta que me proponga
            <span className="text-primary">]</span>
          </p>

          <h2 className="my-8 mb-4 text-2xl font-semibold">Cursos y certificaciones</h2>
          <p className="mb-4 leading-loose">
            A lo largo del tiempo he complementado mi formación con diversos cursos y certificaciones que fortalecen mi
            perfil técnico y me permiten estar al día con las mejores prácticas del desarrollo y diseño de software.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            {certifications.map((certification, index) => (
              <Link href={certification.certificationLink} target="_blank" className="flex items-center" key={index}>
                <span className="mr-2 text-primary">•</span>
                <span className="hover:underline">{certification.name}</span>
              </Link>
            ))}
          </div>

          <h2 className="my-8 mb-4 text-2xl font-semibold">Intereses y pasatiempos</h2>
          <p className="mb-2 leading-loose">
            Más allá del trabajo, me interesa mantener un equilibrio personal. La <strong>fotografía</strong> es una de
            mis pasiones: disfruto capturar momentos auténticos a través del lente. También comparto mi día a día con
            dos gatas —compañeras fieles en casa— y encuentro en la <strong>bicicleta</strong> una excelente forma de
            desconectar y liberar el estrés. Últimamente me he sumergido en el mundo de los{" "}
            <strong>teclados mecánicos personalizados</strong>, una afición que combina precisión, diseño y la
            satisfacción de construir algo único desde cero. Además, disfruto compartir ideas y aprendizajes en mi{" "}
            <strong>blog personal</strong>, donde escribo sobre tecnología, desarrollo y otros temas que me apasionan.
          </p>

          <p className="mb-20">
            Puedes ver algunas de mis fotografías en{" "}
            <Link
              target="_blank"
              className="hover:underline bg-primary rounded-lg px-2 py-1"
              href="https://www.flickr.com/photos/breathnshoot/"
            >
              Flickr
            </Link>{" "}
            y explorar mis artículos en mi{" "}
            <Link
              target="_blank"
              className="hover:underline bg-primary rounded-lg px-2 py-1"
              href="https://enrique-blog.vercel.app/"
            >
              Blog Personal
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;

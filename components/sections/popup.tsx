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
        <div className="relative z-20 max-h-[60vh] leading-loose pt-6 overflow-y-scroll scrollbar-none pb-24">
          <h2 className="my-8 mb-4 text-2xl font-semibold ">Como Ingeniero Civil Informático</h2>
          <p className="mb-2 leading-loose">
            También me preocupo por otros aspectos del desarrollo de proyectos, como la <strong>planificación</strong>, la{" "}
            <strong>comunicación efectiva</strong> y la <strong>gestión de recursos</strong>. Mi pasión por la gestión de proyectos y el{" "}
            <strong>trabajo en equipo</strong> me ha permitido adquirir valiosas habilidades de <strong>liderazgo</strong>.
          </p>

          <p className="mb-2 leading-loose">
            {" "}
            <span className="text-primary ">[</span>Siempre estoy en busca de nuevas formas de mejorar mis habilidades y conocimientos para
            entregar lo mejor de mí en cada proyecto, desafío o meta que me proponga
            <span className="text-primary ">]</span>
          </p>
          <h2 className="my-8 mb-4 text-2xl font-semibold ">Cursos y certificaciones</h2>
          <p className="mb-4 leading-loose">
            Estos son algunos cursos y certificaciones que he completado recientemente para fortalecer mis habilidades y conocimientos en el
            campo del desarrollo y diseño.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            {certifications.map((certification, index) => (
              <Link href={certification.certificationLink} target="_blank" className=" flex items-center" key={index}>
                <span className="mr-2">•</span>
                <span className="hover:underline">{certification.name}</span>
              </Link>
            ))}
          </div>
          <h2 className="my-8 mb-4 text-2xl font-semibold ">Intereses y pasatiempos</h2>
          <p className="mb-2 leading-loose">
            Fuera de mi vida profesional, tengo diversos intereses y pasatiempos. La fotografía es uno de ellos, donde siempre persigo la
            captura de momentos únicos a través del objetivo de mi cámara. También soy un amante de los gatos y disfruto de la compañía de
            mis dos gatas en casa. Además, disfruto pasear en bicicleta, una actividad que me ayuda a gestionar el estrés y también me gusta
            mucho el hooby de los teclados mecánicos custom, me gusta mucho la idea de construir algo desde cero con las especificaciones
            que quieres. Por otro lado, encuentro satisfacción en compartir mis intereses y conocimientos a través de mi blog personal.
          </p>
          <p className="mb-20">
            Puedes encontrar algunas de mis fotografías en mi perfil de{" "}
            <Link
              target="_blank"
              className="hover:underline bg-primary rounded-lg px-2 py-1"
              href="https://www.flickr.com/photos/breathnshoot/"
            >
              Flickr
            </Link>{" "}
            y también puedes visitar mi{" "}
            <Link target="_blank" className="hover:underline bg-primary rounded-lg px-2 py-1" href="https://enrique-blog.vercel.app/">
              Blog Personal
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;

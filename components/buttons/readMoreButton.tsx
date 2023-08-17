"use client";

interface ReadMoreButtonProps {
  openPopupHandler: () => void;
}

const ReadMoreButton = ({ openPopupHandler }: ReadMoreButtonProps) => {
  return (
    <button
      onClick={openPopupHandler}
      style={{
        backgroundImage: "radial-gradient(100% 1338.07% at 4.85% 0%, #8B74F6 0%, #B4E5DC 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient 5s ease-out infinite",
      }}
      className=" p-[2px] rounded-lg shadow-md relative"
    >
      {/* Content */}
      <div className="shadow-lg hover:scale-105 duration-150 transition-all ease-out flex items-center justify-center px-5 py-3 font-medium rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-100">
        Leer más
      </div>
    </button>
  );
};

export default ReadMoreButton;

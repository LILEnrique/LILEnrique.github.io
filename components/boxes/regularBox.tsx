import { OnlyChildrenProps } from "@/types/generalTypes";

const RegularBox = ({ children }: OnlyChildrenProps) => {
  return (
    <div className="w-full h-full  rounded-lg shadow-md borderBW bg-primaryWhite/20 dark:bg-primaryBlack/20 backdrop-blur-md px-8 py-8 md:py-10 md:px-10  text-left ">
      {/* Content */}

      {children}
    </div>
  );
};

export default RegularBox;

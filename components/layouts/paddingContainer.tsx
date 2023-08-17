import { OnlyChildrenProps } from "@/types/generalTypes";

const PaddingContainer = ({ children }: OnlyChildrenProps) => {
  return <div className="mx-auto w-full max-w-5xl px-4 ">{children}</div>;
};

export default PaddingContainer;

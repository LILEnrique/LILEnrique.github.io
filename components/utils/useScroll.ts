import { useEffect, useState } from "react";

const useScroll = () => {
  const [inTop, setinTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setinTop(window.scrollY < 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { inTop };
};

export default useScroll;

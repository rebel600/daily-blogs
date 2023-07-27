import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const cleanup = () => {
      console.log("runs if a useEffect dep changes");
      window.removeEventListener("resize", handleResize);
    };
    return cleanup;
  }, []);
  return windowSize;
};

export default useWindowSize;

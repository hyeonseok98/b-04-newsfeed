import { useEffect } from "react";

const useInfinityScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
        document.documentElement.offsetHeight === 0
      )
        return;
      callback();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useInfinityScroll;

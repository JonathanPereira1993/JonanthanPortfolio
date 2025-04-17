import { useEffect, useState } from "react";

function useScreenSize(threshold: number) {
  const [isAboveThreshold, setIsAboveThreshold] = useState(
    window.innerWidth >= threshold
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${threshold}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsAboveThreshold(event.matches);
    };

    setIsAboveThreshold(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [threshold]);

  return isAboveThreshold;
}

export default useScreenSize;

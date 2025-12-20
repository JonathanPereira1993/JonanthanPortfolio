import { useEffect, useState } from "react";

function useScreenSize(direction: string = "width", threshold: number) {
  const [isAboveHorizontalThreshold, setIsAboveHorizontalThreshold] = useState(
    window.innerWidth >= threshold
  );

  const [isAboveVerticalThreshold, setIsAboveVerticalThreshold] = useState(
    window.innerHeight >= threshold
  );

  useEffect(() => {
    const horizontalMediaQuery = window.matchMedia(
      `(min-width: ${threshold}px)`
    );
    const verticalMediaQuery = window.matchMedia(
      `(min-height: ${threshold}px)`
    );

    const handleChange = (event: MediaQueryListEvent) => {
      if (direction === "width") {
        setIsAboveHorizontalThreshold(event.matches);
      } else if (direction == "height") {
        setIsAboveVerticalThreshold(event.matches);
      }
    };

    if (direction === "width") {
      setIsAboveHorizontalThreshold(horizontalMediaQuery.matches);
    } else if (direction == "height") {
      setIsAboveVerticalThreshold(verticalMediaQuery.matches);
    }

    if (direction === "width") {
      horizontalMediaQuery.addEventListener("change", handleChange);
    } else if (direction == "height") {
      verticalMediaQuery.addEventListener("change", handleChange);
    }

    return () => {
      if (direction === "width") {
        horizontalMediaQuery.removeEventListener("change", handleChange);
      } else if (direction == "height") {
        verticalMediaQuery.removeEventListener("change", handleChange);
      }
    };
  }, [threshold, direction]);

  if (direction === "width") {
    return isAboveHorizontalThreshold;
  } else if (direction == "height") {
    return isAboveVerticalThreshold;
  } else {
    return isAboveHorizontalThreshold;
  }
}

export default useScreenSize;

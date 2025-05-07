import { useState } from "react";
import { Blurhash } from "react-blurhash";

import "./ImagePlaceholder.scss";

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  resolutionX?: number;
  resolutionY?: number;
  hash: string;
};

const ImagePlaceholder = ({
  src,
  alt,
  width,
  height,
  resolutionX = 32,
  resolutionY = 32,
  hash,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-placeholder" style={{ width, height }}>
      {!isLoaded && (
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={resolutionX}
          resolutionY={resolutionY}
          punch={1}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transform: "translate(-50%, -50%)",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImagePlaceholder;

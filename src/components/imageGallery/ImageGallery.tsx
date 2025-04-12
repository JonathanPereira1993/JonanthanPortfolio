import "./ImageGallery.scss";

type Props = {
  images: string[];
  altText: string;
};

const ImageGallery = ({ images, altText = "Gallery image" }: Props) => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => {
        return (
          <img
            key={index}
            src={src}
            alt={altText}
            className={`image-gallery__item `}
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;

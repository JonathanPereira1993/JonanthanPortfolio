import "./ImageGallery.scss";

type Props = {
  images: string[];
};

const ImageGallery = ({ images }: Props) => {
  return (
    <div className="gallery">
      {images.map((src, index) => {
        return (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className={`gallery-item `}
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;

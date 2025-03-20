import "./ImageGallery.scss";

type Props = {
  images: string[];
};

const ImageGallery = ({ images }: Props) => {
  return (
    <div className="gallery">
      {images.map((src, index) => {
        const rowSpan = index % 7 === 0 ? "row-span-2" : "";
        const colSpan = index % 5 === 0 ? "col-span-2" : "";

        return (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className={`gallery-item ${rowSpan} ${colSpan}`}
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;

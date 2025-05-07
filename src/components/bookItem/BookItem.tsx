import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import "./BookItem.scss";

type Props = {
  image: string;
  title: string;
  author?: string;
  hash: string;
};

const BookItem = ({ image, hash, title, author }: Props) => {
  return (
    <div className="book-item theme-shadow">
      <ImagePlaceholder src={image} width={400} height={500} hash={hash} />
      <img className="book-item__image" src={image} alt={title} />
      <div className="book-item__content">
        <h3 className="book-item__content-title">{title}</h3>
        <p className="book-item__content-author">{author}</p>
      </div>
    </div>
  );
};

export default BookItem;

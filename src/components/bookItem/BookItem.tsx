import "./BookItem.scss";

type Props = {
  image?: string;
  title: string;
  author?: string;
};

const BookItem = ({ image, title, author }: Props) => {
  return (
    <div className="book-item theme-shadow">
      <img className="book-item__image" src={image} alt={title} />
      <div className="book-item__content">
        <h3 className="book-item__content-title">{title}</h3>
        <p className="book-item__content-author">{author}</p>
      </div>
    </div>
  );
};

export default BookItem;

import "./BookItem.scss";

type BookType = "Fantasy" | "Biography" | "Finances" | "Science" | "Self-help";

type Props = {
  image?: string;
  title: string;
  description?: string;
  tag?: BookType;
};

const BookItem = ({ image, title, description, tag }: Props) => {
  return (
    <div className="book-item">
      <img className="book-item__image" src={image} alt={title} />
      <div className="book-item__content">
        <h3 className="book-item__content-title">{title}</h3>
        <p className="book-item__content-description">{description}</p>
      </div>
      <span className="book-item__tag">{tag}</span>
    </div>
  );
};

export default BookItem;

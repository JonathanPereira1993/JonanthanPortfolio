import BookItem from "../../../../components/bookItem/BookItem";
import ContentLayout from "../../../../components/contentLayout/ContentLayout";
import StaggeredListAnimation from "../../../../components/StaggeredListAnimation/StaggeredListAnimation";

import { books } from "../../../../constants/Constants";

import "./BooksSection.scss";

const BooksSection = () => {
  return (
    <ContentLayout
      title="_books"
      subtitle="// Let me share some of my favorite books with you! Each one has
            shaped my perspective, inspired me, and reflects a part of who I am."
    >
      <StaggeredListAnimation className="columns">
        {books.map((book) => (
          <BookItem
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
          />
        ))}
      </StaggeredListAnimation>
    </ContentLayout>
  );
};

export default BooksSection;

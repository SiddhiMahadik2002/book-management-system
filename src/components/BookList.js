import BookCard from "./BookCard";
import "./BookList.css";

function BookList({
  books,
  onEdit,
  onDelete,
}) {
  if (books.length === 0) {
    return (
      <p className="empty-msg">
        No books found.
      </p>
    );
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookList;
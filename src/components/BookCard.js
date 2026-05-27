import "./BookCard.css";

function BookCard({
  book,
  onEdit,
  onDelete,
}) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>
        <strong>Author:</strong>{" "}
        {book.author}
      </p>

      <p>
        <strong>Genre:</strong>{" "}
        {book.genre}
      </p>

      <p>
        <strong>Year:</strong>{" "}
        {book.year}
      </p>

      <div className="card-actions">
        <button
          className="edit-btn"
          onClick={() => onEdit(book)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(book.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
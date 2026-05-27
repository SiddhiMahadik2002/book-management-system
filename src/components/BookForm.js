import {
  useState,
  useEffect,
} from "react";

import "./BookForm.css";

function BookForm({
  onSave,
  editingBook,
}) {
  const [book, setBook] =
    useState({
      title: "",
      author: "",
      genre: "",
      year: "",
    });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(book);

    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
    <form
      className="book-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {editingBook
          ? "Edit Book"
          : "Add Book"}
      </h2>

      <input
        className="form-input"
        name="title"
        placeholder="Book Title"
        value={book.title}
        onChange={handleChange}
      />

      <input
        className="form-input"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />

      <input
        className="form-input"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
      />

      <input
        className="form-input"
        name="year"
        placeholder="Publication Year"
        value={book.year}
        onChange={handleChange}
      />

      <button
        className="submit-btn"
      >
        {editingBook
          ? "Update Book"
          : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;
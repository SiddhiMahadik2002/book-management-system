import { useEffect, useState } from "react";
import "./App.css";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "./services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] =
    useState(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [genreFilter, setGenreFilter] =
    useState("");

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSave = async (book) => {
    try {
      if (editingBook) {
        await updateBook(editingBook.id, book);
        setEditingBook(null);
      } else {
        await addBook(book);
      }

      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      book.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesGenre =
      genreFilter === "" ||
      book.genre === genreFilter;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="container">
      <h1>Book Management System</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />

      <BookForm
        onSave={handleSave}
        editingBook={editingBook}
      />

      <BookList
        books={filteredBooks}
        onEdit={setEditingBook}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
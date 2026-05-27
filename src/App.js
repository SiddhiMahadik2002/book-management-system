import {
  useState,
  useEffect,
} from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "./services/api";

function App() {
  const [books, setBooks] =
    useState([]);

  const [searchBook,
    setSearchBook] =
    useState("");

  const [editingBook,
    setEditingBook] =
    useState(null);

  const fetchBooks =
    async () => {
      try {
        const response =
          await getBooks();

        setBooks(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSave =
    async (book) => {
      try {
        if (editingBook) {
          await updateBook(
            editingBook.id,
            book
          );

          setEditingBook(
            null
          );
        } else {
          await addBook(book);
        }

        fetchBooks();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await deleteBook(id);

        fetchBooks();
      } catch (error) {
        console.error(error);
      }
    };

  const filteredBooks =
    books.filter(
      (book) =>
        book.title
          .toLowerCase()
          .includes(
            searchBook.toLowerCase()
          ) ||
        book.author
          .toLowerCase()
          .includes(
            searchBook.toLowerCase()
          )
    );

  return (
    <div className="container">
      <h1>
        Book Management System
      </h1>

      <SearchBar
        searchTerm={
          searchBook
        }
        setSearchTerm={
          setSearchBook
        }
      />

      <BookForm
        onSave={
          handleSave
        }
        editingBook={
          editingBook
        }
      />
   <h1>Book List</h1>
      <BookList
        books={
          filteredBooks
        }
        onEdit={
          setEditingBook
        }
        onDelete={
          handleDelete
        }
      />
    </div>
  );
}

export default App;
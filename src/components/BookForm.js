import "./BookForm.css";

function BookForm() {
  return (
    <div className="book-form">
      <h2>Add Book</h2>

    <input className="form-input" type="text" placeholder="Book Title" />
<input className="form-input" type="text" placeholder="Author" />
<input className="form-input" type="text" placeholder="Genre" />
<input className="form-input" type="number" placeholder="Publication Year" />

<button className="submit-btn">
  Add Book
</button>
    </div>
  );
}

export default BookForm;
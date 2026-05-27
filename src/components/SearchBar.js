import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input
  className="search-input"
  type="text"
  placeholder="Search books..."
/>
    </div>
  );
}

export default SearchBar;
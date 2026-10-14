function SearchBar({ query, onChange }) {
  return (
    <input
      className="input search"
      type="search"
      placeholder="Search notes"
      aria-label="Search notes"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;

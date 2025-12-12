import "./SearchAnime.css";

export const SearchAnime = ({ search, setSearch }) => {
  return (
    <div className="search-wrapper">
      <input
        className="search-field"
        type="text"
        placeholder="Search for Anime"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

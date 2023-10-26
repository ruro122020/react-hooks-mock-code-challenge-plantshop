import React from "react";

function Search({searchValue, onSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchValue}
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

import React from "react";
import { FaGlobe } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-form">
        <input type="text" placeholder="Search locations" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

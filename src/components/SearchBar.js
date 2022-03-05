import React, { useState } from "react";

const SearchBar = ({ handleChange, placeHolderText }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder={placeHolderText}
        name="name"
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};
export default SearchBar;

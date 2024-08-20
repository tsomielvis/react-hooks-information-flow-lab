// src/components/Filter.js
import React from "react";

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    if (onCategoryChange) {
      onCategoryChange(event.target.value);
    }
  };

  return (
    <select role="combobox" onChange={handleChange}>
      <option value="All">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
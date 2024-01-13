// src/components/SearchResults.jsx
import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id} className="mb-2">
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;

// src/pages/Search.jsx
import React, { useState } from "react";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic here (e.g., fetch data from an API)
    // For this example, a dummy array is used.
    const dummyResults = [
      { id: 1, title: "Result 1" },
      { id: 2, title: "Result 2" },
      { id: 3, title: "Result 3" },
      // Add more results as needed
    ];

    setSearchResults(dummyResults);
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <section className="mb-8">
        <h2 className="text-4xl font-bold mb-4">Search</h2>
        <SearchBar
          placeholder="Enter your search query..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">
          Search Results for "{searchQuery}"
        </h2>
        <SearchResults results={searchResults} />
      </section>
    </div>
  );
};

export default Search;

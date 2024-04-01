import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col px-2 py-4">
      <input
        className="rounded-lg border-2"
        type="text"
        id="search"
        name="Search"
      />
      <input
        className="mt-2 rounded-lg border-2"
        type="text"
        id="location"
        name="Location"
      />
      <button className="my-2 mt-2 rounded-lg bg-green-800 p-2 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

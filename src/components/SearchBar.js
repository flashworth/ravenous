import React from "react";

const SearchBar = () => {
  return (
    <div className="mx-auto max-w-4xl flex-grow py-10">
      <div className="flex flex-col px-2 py-4">
        <p className="font-bold">Restaraunt</p>
        <input
          className="mt-1 rounded-lg border-2 px-2 py-1"
          type="text"
          id="search"
          name="Search"
        />
        <p className="mt-4 font-bold">Type</p>
        <input
          className="mt-1 rounded-lg border-2 px-2 py-1"
          type="text"
          id="location"
          name="Location"
        />
        <button className="my-2 mt-4 w-32 rounded-lg bg-amber-800 p-2 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = () => {
  return (
    <div className="mx-auto max-w-4xl flex-grow py-10">
      <div className="px-2">
        <p className="font-bold">FILTER</p>
        <div className="grid grid-cols-3 gap-2">
          <button className="mt-2 md:w-32 rounded-lg border-2 border-black p-2 hover:bg-black hover:text-white">
            Filter 1
          </button>
          <button className=" mt-2 md:w-32 rounded-lg border-2 border-black p-2 hover:bg-black hover:text-white">
            Filter 2
          </button>
          <button className=" mt-2 md:w-32 rounded-lg border-2 border-black p-2 hover:bg-black hover:text-white">
            Filter 3
          </button>
        </div>
      </div>
      <div className="flex flex-col px-2">
        <p className="font-bold mt-4">RESTARAUNT</p>
        <input
          className="mt-1 rounded-lg border-2 px-2 py-1 border-black"
          type="text"
          id="search"
          name="Search"
        />
        <p className="mt-4 font-bold">TYPE</p>
        <input
          className="mt-1 rounded-lg border-2 px-2 py-1 border-black"
          type="text"
          id="location"
          name="Location"
        />
        <button className="my-2 mt-6 md:w-32 rounded-lg bg-black p-2 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

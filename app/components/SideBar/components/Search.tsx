import React from "react";

const Search = () => {
  return (
    <div className="absolute right-80 top-4 flex h-[2.75rem] w-[23rem] flex-row">
      <div className="flex h-[100%] w-[15%] items-center justify-center rounded-bl-full rounded-tl-full bg-[rgb(28,28,28)] pl-4">
        <span className="material-symbols-outlined text-gray-600">search</span>
      </div>
      <input
        type="text"
        className="h-[100%] w-[95%] rounded-br-full rounded-tr-full bg-[rgb(28,28,28)] pl-4 text-sm outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;

import React from "react";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <form className="flex py-6 px-4 md:py-8 md:px-6 lg:px-0 duration-200 lg:mt-8">
      <SearchIcon />
      <input
        placeholder="Search for movies or TV series"
        type="text"
        className="flex-1 bg-transparent ml-6 font-light md:text-heading-m 
        outline-none duration-200 caret-red"
      />
    </form>
  );
};

export default SearchBar;

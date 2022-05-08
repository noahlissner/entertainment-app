import React from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";

const Bookmarked = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Nav currentPage="bookmark" />
      <div className="flex-1 overflow-x-hidden">
        <SearchBar />
        <h1>Bookmarked</h1>
      </div>
    </div>
  );
};

export default Bookmarked;

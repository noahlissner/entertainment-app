import React, { useEffect, useState } from "react";
import MainGrid from "../components/MainGrid";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import data from "../data.json";

const TvSeries = () => {
  const [tvSeries, setTvSeries] = useState();

  useEffect(() => {
    const filteredTvSeries = data.filter((item) => {
      return item.category === "TV Series";
    });

    setTvSeries(filteredTvSeries);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Nav currentPage="tv" />
      <div className="flex-1 overflow-x-hidden">
        <SearchBar />
        <h1 className="text-heading-l font-light mb-[38px] pl-4 md:pl-6 lg:pl-0">
          Tv Series
        </h1>
        {tvSeries && <MainGrid data={tvSeries} />}
      </div>
    </div>
  );
};

export default TvSeries;

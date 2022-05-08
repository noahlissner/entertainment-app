import React, { useEffect, useState } from "react";
import MainGrid from "../components/MainGrid";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import TopGrid from "../components/TrendingFlex";
import data from "../data.json";

const Home = () => {
  const [trending, setTrending] = useState();
  const [recommended, setRecommended] = useState();

  useEffect(() => {
    const filteredTrending = data.filter((item) => {
      return item.isTrending;
    });
    setTrending(filteredTrending);

    const filteredNotTrending = data.filter((item) => {
      return !item.isTrending;
    });

    setRecommended(filteredNotTrending);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Nav currentPage="home" />
      <div className="flex-1 overflow-x-hidden">
        <SearchBar />
        {trending && <TopGrid data={trending} />}
        {recommended && <MainGrid recommendedTitle data={recommended} />}
      </div>
    </div>
  );
};

export default Home;

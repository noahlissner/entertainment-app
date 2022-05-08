import React from "react";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as TvIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkEmpty } from "../assets/icon-bookmark-empty.svg";

const TopGrid = ({ data }) => {
  return (
    <div className="pl-4 md:pl-6 lg:pl-0">
      <h2 className="text-[20px] md:text-heading-l mb-4 font-light">
        Trending
      </h2>
      <div className="flex gap-4 overflow-auto">
        {data.map((movie) => (
          <div
            key={movie.title}
            className="min-w-[240px] h-[140px] rounded-lg flex flex-col justify-end
            overflow-hidden relative z-[0] md:min-w-[470px] md:h-[230px] duration-200"
          >
            <div
              className="absolute z-10 right-2 top-2 md:right-6 md:top-4 w-8 h-8 bg-dark-blue/50 rounded-full
              flex items-center justify-center group hover:bg-white cursor-pointer duration-200"
            >
              <BookmarkEmpty className="group-hover:text-dark-blue duration-200" />
            </div>
            <div className="flex items-center gap-5 pl-4 md:pl-6">
              <p className="text-[12px] font-light md:text-body-m">
                {movie.year}
              </p>
              <div className="flex items-center gap-1 md:gap-1.5">
                {movie.category === "Movie" ? <MovieIcon /> : <TvIcon />}
                <p className="text-[12px] font-light md:text-body-m">
                  {movie.category}
                </p>
              </div>
              <p className="text-[12px] font-light md:text-body-m">
                {movie.rating}
              </p>
            </div>
            <h4 className="text-body-m pl-4 pb-4 md:pl-6 md:pb-6 md:text-heading-s">
              {movie.title}
            </h4>
            <img
              src={movie.thumbnail.trending.small}
              className="sm:hidden absolute top-0 w-full object-cover h-full z-[-1]"
              alt=""
            />
            <img
              src={movie.thumbnail.trending.large}
              className="hidden sm:block absolute top-0 w-full object-cover h-full z-[-1]"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGrid;

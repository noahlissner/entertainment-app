import React from "react";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as TvIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkEmpty } from "../assets/icon-bookmark-empty.svg";

const MainGrid = ({ data, recommendedTitle }) => {
  return (
    <div className="px-4 pb-4 md:pb-6 md:px-6 lg:px-0 lg:pr-9">
      {recommendedTitle && (
        <h2 className="text-[20px] md:text-heading-l font-light py-6 md:pt-8">
          Recommended for you
        </h2>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-[30px] lg:gap-10">
        {data.map((item) => (
          <div key={item.title}>
            <div className="bg-blue-200 h-[110px] md:h-[140px] lg:h-[174px] relative rounded-lg overflow-hidden">
              <div
                className="absolute z-10 right-2 top-2 md:right-4 md:top-4 w-8 h-8 bg-dark-blue/50 rounded-full
              flex items-center justify-center group hover:bg-white cursor-pointer duration-200"
              >
                <BookmarkEmpty className="group-hover:text-dark-blue duration-200" />
              </div>
              <img
                src={item.thumbnail.regular.small}
                className="sm:hiddden absolute h-full w-full object-cover"
                alt=""
              />
              <img
                src={item.thumbnail.regular.medium}
                className="hidden md:block lg:hidden absolute h-full w-full object-cover"
                alt=""
              />
              <img
                src={item.thumbnail.regular.large}
                className="hidden lg:block absolute h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center mb-1 gap-[14px] md:gap-[19px]">
                <p className="text-[11px] md:text-body-s font-light">
                  {item.year}
                </p>
                <div className="flex items-center gap-1 md:gap-1.5">
                  {item.category === "Movie" ? <MovieIcon /> : <TvIcon />}
                  <p className="text-[11px] md:text-body-s font-light">
                    {item.category}
                  </p>
                </div>
                <p className="text-[11px] md:text-body-s font-light">
                  {item.rating}
                </p>
              </div>
              <h4 className="text-[14px] md:text-heading-xs">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGrid;

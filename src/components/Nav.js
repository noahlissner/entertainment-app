import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";

import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";

const Nav = ({ currentPage }) => {
  return (
    <div className="md:p-6 lg:p-8 lg:pr-9">
      <div
        className="flex h-[72px] lg:w-[96px] lg:h-full flex-row lg:flex-col 
      items-center px-4 lg:px-0 lg:py-8 bg-semi-dark-blue md:rounded-[10px] lg:rounded-[20px]"
      >
        <img src={Logo} alt="Logo" className="w-[25px] md:w-8" />
        <div className="flex-1 flex lg:flex-col justify-center lg:mt-[75px] lg:justify-start gap-6 md:gap-8 lg:gap-10">
          <Link to="/">
            <HomeIcon
              className={`${
                currentPage === "home" ? "text-white" : "text-grey-blue"
              } hover:text-red duration-200`}
            />
          </Link>
          <Link to="/movies">
            <MoviesIcon
              className={`${
                currentPage === "movies" ? "text-white" : "text-grey-blue"
              } hover:text-red duration-200`}
            />
          </Link>
          <Link to="/tv-series">
            <TvIcon
              className={`${
                currentPage === "tv" ? "text-white" : "text-grey-blue"
              } hover:text-red duration-200`}
            />
          </Link>
          <Link to="/bookmarked">
            <BookmarkIcon
              className={`${
                currentPage === "bookmark" ? "text-white" : "text-grey-blue"
              } hover:text-red duration-200`}
            />
          </Link>
        </div>
        <img src={Avatar} alt="User Avatar" className="w-6 md:w-8 lg:w-10" />
      </div>
    </div>
  );
};

export default Nav;

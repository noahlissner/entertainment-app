import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";

import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";

const Nav = () => {
  return (
    <div className="sm:p-6">
      <div className="flex h-[72px] items-center px-4 bg-semi-dark-blue sm:rounded-xl">
        <img src={Logo} alt="Logo" className="w-[25px] sm:w-8" />
        <div className="flex-1 flex items center justify-center gap-6">
          <Link to="#">
            <HomeIcon />
          </Link>
          <Link to="#">
            <MoviesIcon />
          </Link>
          <Link to="#">
            <TvIcon />
          </Link>
          <Link to="#">
            <BookmarkIcon />
          </Link>
        </div>
        <img src={Avatar} alt="User Avatar" className="w-6 sm:w-8" />
      </div>
    </div>
  );
};

export default Nav;

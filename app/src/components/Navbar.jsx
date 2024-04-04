import React from "react";
import Logo from "../assets/logo.svg"
import NavHomeIcon from "../assets/icon-nav-home.svg"
import NavMoviesIcon from "../assets/icon-nav-movies.svg"
import NavSeriesIcon from "../assets/icon-nav-tv-series.svg"
import NavBookmarkedIcon from "../assets/icon-nav-bookmark.svg"
import AvatarIcon from "../assets/icon-avatar.svg"

export default function Navbar() {
    return (
            <div className="navbar-wr">
                <img className="logo" src={Logo} alt="logo" />
                <div className="nav-icons-wr">
                    <img className="nav-icon" src={NavHomeIcon} alt="Home Icon" />
                    <img className="nav-icon" src={NavMoviesIcon} alt="Movies Icon" />
                    <img className="nav-icon" src={NavSeriesIcon} alt="Series Icon" />
                    <img className="nav-icon" src={NavBookmarkedIcon} alt="Bookmarked Icon" />
                </div>
                <img className="avatar-icon" src={AvatarIcon} alt="Bookmarked Icon" />
            </div>
        )
}
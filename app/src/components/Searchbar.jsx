import React from "react";
import searchIcon from "../assets/icon-search.svg"

export default function Searchbar() {
    return (
            <div className="searchbar-wr">
                <img src={searchIcon} alt="search icon" className="search-icon"/>
                <input type="text" placeholder="Search for movies or TV series" className="search-icon"/>
            </div>
        )
}
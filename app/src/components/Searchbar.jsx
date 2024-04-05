import React from "react";
import searchIcon from "../assets/icon-search.svg"

export default function Searchbar(props) {
    
    const placeholderTextMap = {
        Home: "movies or TV series",
        Movies: "movies",
        BookMarked: "bookmarked shows",
      };
      
      let placeHolderText = "Search for " + (placeholderTextMap[props.page] || "TV series");
    
    return (
            <div className="searchbar-wr">
                <img src={searchIcon} alt="search icon" className="search-icon"/>
                <input type="text" placeholder={placeHolderText} className="searchbar heading-m"/>
            </div>
        )
}
import React from "react";
import searchIcon from "../assets/icon-search.svg"
import { DataContext } from "../App.js"

export default function Searchbar(props) {
    
    const {setSearchValue} = React.useContext(DataContext)

    const HandleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase())
    }

    // updates placeholder text for input
    const placeholderTextMap = {
        Home: "movies or TV series",
        Movies: "movies",
        BookMarked: "bookmarked shows",
      };
      
    let placeHolderText = "Search for " + (placeholderTextMap[props.page] || "TV series");
    
    return (
            <div className="searchbar-wr">
                <img src={searchIcon} alt="search icon" className="search-icon"/>
                <input onChange={(e) => HandleSearch(e)} type="text" placeholder={placeHolderText} className="searchbar heading-m" id="searchbar"/>
            </div>
        )
}
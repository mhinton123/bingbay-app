import React from "react";
import Title from "./Title.jsx";
import { DataContext } from "../App.js"
const { v4: uuidv4 } = require('uuid')

export default function SearchResults() {
    
    const {data, searchValue, page} = React.useContext(DataContext)
    
    // filter search results by searchbar input
    const searchResults = data.filter(title => title.title.toLowerCase().includes(searchValue))
    
    // filter search result based on what page user is on
    let pageFilter = []
    if(page === "Movies") {
        pageFilter = searchResults.filter(title => title.category === "Movie")
    }
    else if(page === "TV Series") {
        pageFilter = searchResults.filter(title => title.category === "TV Series")
    }
    else {
        pageFilter = searchResults
    }

    const resultsJSX = pageFilter.map(title => {
        return (
            <Title
                key={uuidv4()} 
                title={title.title}
                thumbnail={title.thumbnail.regular.large}
                year={title.year}
                category={title.category}
                rating={title.rating}
                isBookmarked="false"
                isTrending={title.isTrending}
            />
        )
    })
    
    return (
        
        resultsJSX.length === 0 ?
        
        (
            <div className="search-wr">
                <h2 className="heading-l">0 results found for '{searchValue}'</h2>
            </div>
        )
        
        :
        
        (
            <div className="search-wr">
                <h2 className="heading-l">Found {resultsJSX.length} results for '{searchValue}'</h2>
                <div className="title-list-wr">

                    {/* Search Results go here */}
                            {resultsJSX}

                </div>
            </div>
        )
    )
}
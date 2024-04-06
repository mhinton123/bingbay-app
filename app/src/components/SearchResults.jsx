import React from "react";
import { DataContext } from "../App.js"
import Title from "./Title.jsx";
const { v4: uuidv4 } = require('uuid')

export default function SearchResults() {
    
    const {data, searchValue, page} = React.useContext(DataContext)

    const searchResults = data.filter(title => title.title.toLowerCase().includes(searchValue))
    let pageFilter = []

    // Filter search result based on what page user is on
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
        <div className="title-list-wr">

            {/* Search Results go here */}
            <>
                {resultsJSX}
            </>
        
        </div>
    )
}
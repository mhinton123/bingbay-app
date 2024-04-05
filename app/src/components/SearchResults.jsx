import React from "react";
import { DataContext } from "../App.js"
import Title from "./Title.jsx";
const { v4: uuidv4 } = require('uuid')

export default function SearchResults() {
    
    const {data, searchValue} = React.useContext(DataContext)

    const searchResults = data.filter(title => title.title.toLowerCase().includes(searchValue))
    console.log(searchResults)
    const resultsJSX = searchResults.map(title => {
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

    console.log(searchResults)
    
    return (
        <div className="title-list-wr">

            {resultsJSX}
        </div>
    )
}
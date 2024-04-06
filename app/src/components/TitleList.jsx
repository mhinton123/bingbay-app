import React from "react";
import Title from "./Title"
import { DataContext } from "../App.js"
const { v4: uuidv4 } = require('uuid')

export default function TitleList(props) {

    const {data} = React.useContext(DataContext)
    
    // filter all non-trending shows
    let trendingArr = data;
    if (props.header === "Recommended for you") {
        trendingArr = trendingArr.filter(title => !title.isTrending)
    } else {
        trendingArr = trendingArr.filter(title => title.category === (props.header === "Movies" ? "Movie" : "TV Series"))
    }
    
    const filteredTitlesJSX = trendingArr.map(title => {
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
        <>
            <div className="title-container">
                <h2 className="heading-l">{props.header}</h2>
                <div className="title-list-wr">

                        {/* Titles are rendered here */}
                        {filteredTitlesJSX}

                </div>
            </div>
        </>
    )
}
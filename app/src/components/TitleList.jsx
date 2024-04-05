import React from "react";
import Title from "./Title"
import { DataContext } from "../App.js"
const { v4: uuidv4 } = require('uuid')


export default function TitleList(props) {

    // Filter trending and convert to JSX
    const titlesObjArr = React.useContext(DataContext)
    let filteredArr = []
    
    if(props.header === "Recommended for you") {
        filteredArr = titlesObjArr.filter(title => !title.isTrending)
    }
    else if (props.header === "Movies") {
        filteredArr = titlesObjArr.filter(title => title.category === "Movie")
    }
    else {
        filteredArr = titlesObjArr.filter(title => title.category === "TV Series")
    }
    
    const filteredTitlesJSX = filteredArr.map(title => {
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
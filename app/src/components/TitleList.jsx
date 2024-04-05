import React from "react";
import Title from "./Title"
import { DataContext } from "../App.js"

export default function TitleList(props) {

    // Filter trending and convert to JSX
    const titlesObjArr = React.useContext(DataContext)
    const filteredNonTrending = titlesObjArr.filter(title => !title.isTrending)
    const titlesJSX = filteredNonTrending.map(title => {
        return (
            <Title 
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


                        {/* Arr of Recommended Titles rendered here */}
                        {titlesJSX}


                </div>
            </div>
        </>
    )
}
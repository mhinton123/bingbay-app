import React from "react";
import TrendingTitle from "../components/TrendingTitle"
import { DataContext } from "../App.js"

export default function TrendingList() {
    
    // Filter trending and convert to JSX
    const titlesObjArr = React.useContext(DataContext)
    const filteredTrending = titlesObjArr.filter(title => title.isTrending)
    const titlesJSX = filteredTrending.map(title => {
        return (
            <TrendingTitle 
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
            <div className="trending-wr">
                <h2 className="heading-l">Trending</h2>
                <div className="trending-list-wr">

                    {/* Trending Titles rendered here */}
                    {titlesJSX}
                        
                </div>
            </div>
        </>
    )
}
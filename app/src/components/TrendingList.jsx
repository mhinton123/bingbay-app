import React from "react";
import TrendingTitle from "../components/TrendingTitle"

export default function TrendingList() {
    return (
        <>
            <div className="trending-wr">
                <h2>Trending</h2>
                <div className="trending-list-wr">

                    <div className='trending-title-wr'>

                        {/* Arr of Trending Titles rendered here */}
                        <TrendingTitle />
                        <TrendingTitle />
                        <TrendingTitle />
                        <TrendingTitle />

                    </div>

                </div>
            </div>
        </>
    )
}
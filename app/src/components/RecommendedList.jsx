import React from "react";
import RecommendedTitle from "./RecommendedTitle"

export default function RecommendedList() {
    return (
        <>
            <div className="recommended-wr">
                <h2 className="heading-l">Recommended for you</h2>
                <div className="recommended-list-wr">


                        {/* Arr of Recommended Titles rendered here */}
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />
                        <RecommendedTitle />


                </div>
            </div>
        </>
    )
}
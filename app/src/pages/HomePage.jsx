import React from "react";
import TrendingList from "../components/TrendingList"
import RecommendedList from "../components/RecommendedList.jsx"

export default function HomePage() {
    return (
        <>
            <TrendingList />
            <RecommendedList />
        </>
    )
}
import React from "react";
import TrendingList from "../components/TrendingList"
import TitleList from "../components/TitleList.jsx"

export default function HomePage() {
    return (
        <>
            <TrendingList />
            <TitleList header="Recommended for you"/>
        </>
    )
}
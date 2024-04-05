import React from "react";
import TrendingList from "../components/TrendingList"
import TitleList from "../components/TitleList.jsx"
import Searchbar from "../components/Searchbar.jsx";

export default function HomePage() {
    return (
        <>
            <Searchbar page="Home"/>
            <TrendingList />
            <TitleList header="Recommended for you"/>
        </>
    )
}
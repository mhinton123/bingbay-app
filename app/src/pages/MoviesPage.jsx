import React from "react";
import TitleList from "../components/TitleList.jsx"
import Searchbar from "../components/Searchbar.jsx";

export default function HomePage() {
    return (
        <>
            <Searchbar page="Movies"/>
            <TitleList header="Movies"/>
        </>
    )
}
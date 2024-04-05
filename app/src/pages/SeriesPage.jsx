import React from "react";
import TitleList from "../components/TitleList.jsx"
import Searchbar from "../components/Searchbar.jsx"
import { DataContext } from "../App.js"

export default function HomePage() {
    
    const {page, setPage} = React.useContext(DataContext)
    setPage("TV Series")
    console.log(page)
    
    return (
        <>
            <Searchbar page={page}/>
            <TitleList header={page}/>
        </>
    )
}
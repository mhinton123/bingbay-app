import React from "react";
import TitleList from "../components/TitleList.jsx"
import Searchbar from "../components/Searchbar.jsx"
import SearchResults from "../components/SearchResults.jsx";
import { DataContext } from "../App.js"

export default function HomePage() {
    
    const {page, setPage, searchValue} = React.useContext(DataContext)
    setPage("TV Series")
    
    return (
        <>
        {searchValue ?
                (
                    <>
                        <Searchbar page={page}/>
                        <SearchResults />
                    </>
                )
            :
                (
            <>
                <Searchbar page={page}/>
                <TitleList header={page}/> 
            </>
                )}
        </>
    )
}
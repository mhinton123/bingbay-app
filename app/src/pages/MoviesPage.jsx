import React from "react";
import TitleList from "../components/TitleList.jsx"
import Searchbar from "../components/Searchbar.jsx";
import { DataContext } from "../App.js"
import SearchResults from "../components/SearchResults.jsx";

export default function HomePage() {
    
    const {page, setPage, searchValue} = React.useContext(DataContext)
    setPage("Movies")
    
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
import React from "react";
import Title from "./Title"

export default function TitleList(props) {

    const {header} = props

    return (
        <>
            <div className="title-container">
                <h2 className="heading-l">{header}</h2>
                <div className="title-list-wr">


                        {/* Arr of Recommended Titles rendered here */}
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />
                        <Title />


                </div>
            </div>
        </>
    )
}
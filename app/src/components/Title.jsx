import React from "react";
import MovieIcon from "../assets/icon-category-movie.svg"
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg"
import BookmarkIconFull from "../assets/icon-bookmark-full.svg"
import PlayIcon from "../assets/icon-play.svg"


export default function Title(props) {
    
    const {
        title, 
        category, 
        isBookmarked, 
        rating, 
        thumbnail, 
        year} = props
    
    const handleMouseOver = (e) => {
        
        // show play button
        const playButton = e.target.querySelector('.title-play-btn');
        
        if (playButton) {
            playButton.style.display = "flex"
        }
    }
    
    const handleMouseLeave = (e) => {
        
        // hide play button on all elements to avoid wierd behaviour
        const playButton = e.target.querySelector('.title-play-btn');
        
        if (playButton) {
            const btnsArr = document.getElementsByClassName('title-play-btn')
            Array.from(btnsArr).forEach(btn => {
                btn.style.display = "none"
            })
        }
    }

    return (
        <div 
            className="title-wr" 
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
        >
            <img src={thumbnail} alt="title image" className="bg-img" />
            <div className="title-details-wr">
                <div className="title-details">
                    <p className="title-detail body-m">{year}</p>
                    <span className="middle-dot">&#183;</span>
                    <div className="title-detail-movie-wr">
                        <img src={MovieIcon} alt="" className="movie-icon" />    
                        <p className="trending-detail body-m">{category}</p>
                    </div>
                    <span className="middle-dot">&#183;</span>
                    <p className="title-detail body-m">{rating}</p>
                </div>
                <h3 className="title-name heading-xs">{title}</h3>
            </div>
            <div className="bookmark-icon-wr">
                <img src={isBookmarked ? BookmarkIconEmpty : BookmarkIconFull} alt="" className="title-bookmark-icon" />
            </div>
            <button className="title-play-btn">
                <img src={PlayIcon} alt="play icon" className="play-icon"/>
                <p className="play">Play</p>
            </button>
        </div>
    )
}
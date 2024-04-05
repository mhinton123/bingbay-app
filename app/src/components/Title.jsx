import React from "react";
import BGImage from "../assets/thumbnails/112/regular/large.jpg"
import MovieIcon from "../assets/icon-category-movie.svg"
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg"
import BookmarkIconFull from "../assets/icon-bookmark-full.svg"

export default function Title(props) {
    
    const {
        title, 
        category, 
        isBookmarked, 
        isTrending, 
        rating, 
        thumbnail, 
        year} = props
    
    return (
        <div className="title-wr">
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
        </div>
    )
}
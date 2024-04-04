import React from "react";
import BGImage from "../assets/thumbnails/112/regular/large.jpg"
import BookmarkIcon from "../assets/icon-bookmark-empty.svg"
import MovieIcon from "../assets/icon-category-movie.svg"

export default function Title() {
    return (
        
        <div className="title-wr">
            <img src={BGImage} alt="title image" className="bg-img" />
            <div className="title-details-wr">
                <div className="title-details">
                    <p className="title-detail body-m">2019</p>
                    <span className="middle-dot">&#183;</span>
                    <div className="title-detail-movie-wr">
                        <img src={MovieIcon} alt="" className="movie-icon" />    
                        <p className="trending-detail body-m">Movie</p>
                    </div>
                    <span className="middle-dot">&#183;</span>
                    <p className="title-detail body-m">PG</p>
                </div>
                <h3 className="title-name heading-xs"> sdf dssadf  sadf Beyond Earth</h3>
            </div>
            <div className="bookmark-icon-wr">
                <img src={BookmarkIcon} alt="" className="title-bookmark-icon" />
            </div>
        </div>
    )
}
import React from "react";
import BGImage from "../assets/thumbnails/112/regular/large.jpg"
import BookmarkIcon from "../assets/icon-bookmark-empty.svg"

export default function RecommendedTitle() {
    return (
        
        <div className="recommended-title-wr">
            <img src={BGImage} alt="recommended title image" className="recommended-bg-img" />
            <div className="recommended-details-wr">
                <div className="recommended-details">
                    <p className="recommended-detail body-m">2019</p>
                    <span className="middle-dot">&#183;</span>
                    <p className="recommended-detail body-m">Movie</p>
                    <span className="middle-dot">&#183;</span>
                    <p className="recommended-detail body-m">PG</p>
                </div>
                <h3 className="recommended-name heading-xs"> sdf dssadf  sadf Beyond Earth</h3>
            </div>
            <div className="bookmark-icon-wr">
                <img src={BookmarkIcon} alt="" className="recommended-bookmark-icon" />
            </div>
        </div>
    )
}
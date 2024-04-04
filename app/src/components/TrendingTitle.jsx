import React from "react";
import BGImage from "../assets/thumbnails/112/regular/large.jpg"
import BookmarkIcon from "../assets/icon-bookmark-empty.svg"

export default function TrendingTitle() {
    return (
        
        <div className="trending-title-wr">
            <img src={BGImage} alt="trending title image" className="trending-bg-img" />
            <div className="trending-details-wr">
                <div className="trending-details">
                    <p className="trending-detail">2019</p>
                    <span className="middle-dot">&#183;</span>
                    <p className="trending-detail">Movie</p>
                    <span className="middle-dot">&#183;</span>
                    <p className="trending-detail">PG</p>
                </div>
                <h3 className="trending-name">Beyond Earth</h3>
                <div className="bookmark-icon-wr">
                    <img src={BookmarkIcon} alt="" className="trending-bookmark-icon" />
                </div>
            </div>
        </div>
    )
}
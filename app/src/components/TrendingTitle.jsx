import React from "react";
import BGImage from "../assets/thumbnails/112/regular/large.jpg"
import MovieIcon from "../assets/icon-category-movie.svg"
import BookmarkIconEmpty from "../assets/icon-bookmark-empty.svg"
import BookmarkIconFull from "../assets/icon-bookmark-full.svg"

export default function TrendingTitle(props) {
    
    const {
        title, 
        category, 
        isBookmarked, 
        isTrending, 
        rating, 
        thumbnail, 
        year} = props
    
    return (
        
        <div className="trending-title-wr">
            
            <img src={thumbnail} alt="trending title image" className="trending-bg-img" />
            
            <div className="trending-details-wr">
                
                <div className="trending-details">
                    <p className="trending-detail body-m">{year}</p>
                    <span className="middle-dot">&#183;</span>
                    
                    <div className="trending-detail-movie-wr">
                        <img src={MovieIcon} alt="" className="movie-icon" />    
                        <p className="trending-detail body-m">{category}</p>
                    </div>
                    
                    <span className="middle-dot">&#183;</span>
                    <p className="trending-detail body-m">{rating}</p>
                </div>
                
                <h3 className="trending-name heading-xs">{title}</h3>
                
            </div>
            
            <div className="bookmark-icon-wr">
                <img src={isBookmarked ? BookmarkIconEmpty : BookmarkIconFull} alt="" className="trending-bookmark-icon" />
            </div>
        </div>
    )
}
import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './SingleAstroCard.css'

const SingleAstroCard = ({addToFavorites, removeFromFavorites, id, key, date, buttonStyle, explanation, hdurl, title, url}) => {
  
    
    const [isDisabled, setIsDisabled] = useState(false);
    const [canFavorite, setCanFavorite] = useState(true);
    const [favorites, setFavorites] = useState([])

    const [isLiked, updateLike] = useState(false);



    const handleLike = (e) => {
        if(!isLiked) {
            updateLike(true);
            addToFavorites(e.target.id)
        } else {
            updateLike(false);
            removeFromFavorites(e.target.classList)

        }
    }



    return (
        <div className="each-astro-data" id={id}>
            <a href={url}>Share This Image</a>
            <p className="astro-title"> {title}</p>
            <NavLink to={`/astro-info/${id}`}><button className="more-info-btn">More Info</button></NavLink>
        
            
            <button id={id} className={title} disabled={isLiked} onClick={e => {handleLike(e)}}>
            <i className="like-image" id={id} aria-hidden="true"> ❤️</i>
        </button>
        <button id={id} className={title} disabled={!isLiked} onClick={e => {handleLike(e)}}>
        <i className={title} id={id} aria-hidden="true">💔</i>
        </button>
        <p>You {isLiked ? "liked" : "have not liked"} this image. </p>
        <NavLink to={`/astro-info/${id}`}> <img src={url} alt={title} className="astro-image"/></NavLink>

        </div>
    );
};

export default SingleAstroCard;

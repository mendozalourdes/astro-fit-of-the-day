import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './SingleAstroCard.css'
import { formatDate } from '../../Utils/utils'

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
            <section className="each-astro-data-card" id={id}>
                <NavLink to={`/astro-info/${id}`}><p className="astro-title"> {title}</p></NavLink>
                <p className="astro-date">Date of Capture: {formatDate(date)}</p>
                <section className="button-section">
                    <NavLink to={`/astro-info/${id}`}><button className="more-info-btn">More Info</button></NavLink>
                    <button id={id} className={title} disabled={isLiked} onClick={e => {handleLike(e)}}>
                        <i className="like-image" id={id} aria-hidden="true"> ❤️</i>
                    </button>
                    <button id={id} className={title} disabled={!isLiked} onClick={e => {handleLike(e)}}>
                        <i className={title} id={id} aria-hidden="true">💔</i>
                    </button>
                </section>
            <p>{isLiked ? " You ❤️ this astro-card. " : " You have not liked this astro-card."} </p>
            <div className="astro-card-image-container-group">
                 <NavLink to={`/astro-info/${id}`}> <img src={url} alt={title} className="astro-image"/></NavLink>
            </div>
                <a className="share-link" href={url}>Share This Image</a>
            </section>
    );
};

export default SingleAstroCard;

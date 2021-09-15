import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './SingleAstroCard.css'

const SingleAstroCard = ({addToFavorites, removeFromFavorites, id, key, date, buttonStyle, explanation, hdurl, title, url}) => {
  
    
    const [isDisabled, setIsDisabled] = useState(false);
    const [canFavorite, setCanFavorite] = useState(true);
    const [favorites, setFavorites] = useState([])

    const [isLiked, updateLike] = useState(false);


    // const handleLike = () => {
    //     // let currentLikedImages = 
    //     if (!isLiked) {
    //       updateLike(true);
    //       if (!currentLikedBands.includes(name))
    //         props.updateLikedBands(
    //           [...currentLikedBands, name]
    //         );
    //     } else {
    //       updateLike(false);
    //       if (currentLikedBands.includes(name))
    //         props.updateLikedBands(
    //           currentLikedBands
    //           .filter(band => band !== name)
    //           );
    //     }
    //   };

    const handleLike = (e) => {
        console.log("event", e.target.id)
        if(!isLiked) {
            updateLike(true);
            addToFavorites(e.target.id)
        } else {
            updateLike(false);
            removeFromFavorites(e.target.classList)

        }
    }

    let buttonImg = buttonStyle ?
                   <img id={id} key={key} src="https://img.icons8.com/office/30/000000/like--v1.png" alt="favorite button"/>
                 : <img id={id} src="https://img.icons8.com/office/30/000000/delete-sign.png" alt="delete button"/>;


    return (
        // <NavLink to={`/astro-info/${id}`}>
        <div className="each-astro-data" id={id}>
            {/* <p>{url}</p> */}
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
            <img src={url} alt={title} className="astro-image"/>

        </div>
        // </NavLink>
    );
};

export default SingleAstroCard;

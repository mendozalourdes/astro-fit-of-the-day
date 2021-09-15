import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './SingleAstroCard.css'

const SingleAstroCard = ({id, key, date, button, explanation, hdurl, title, url}) => {
    
    const [isDisabled, setIsDisabled] = useState(false);
    // const [canFavorite, setCanFavorite] = useState(true);

    const handleClick = (e) => {
        setIsDisabled(true);
        // setCanFavorite(addToFavorites(e))
    }

    let buttonImg = button ?
                   <img id={id} key={key} src="https://img.icons8.com/office/30/000000/like--v1.png" alt="favorite button"/>
                 : <img id={id} src="https://img.icons8.com/office/30/000000/delete-sign.png" alt="delete button"/>;


    return (
        <NavLink to={`/astro-info/${id}`}>
        <div className="each-astro-data" id={id}>
            {/* <p>{url}</p> */}
            <a href={url}>Share This Image</a>
            <p className="astro-title"> {title}</p>
            <button id={id} 
            disabled={isDisabled}
            // onClick={e => {
            //     if(button) {
            //         handleClick(e)
            //     } else {
            //         removeFromFavorites(e)
            //     }
            //     }}
            > {buttonImg} </button>
            
            <img src={url} alt={title} className="astro-image"/>

        </div>
        </NavLink>
    );
};

export default SingleAstroCard;

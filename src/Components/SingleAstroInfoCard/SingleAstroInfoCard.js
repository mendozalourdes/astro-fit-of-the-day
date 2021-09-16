import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './SingleAstroInfoCard.css'

const SingleAstroInfoCard = ({astroData, id, astroMatch}) => {
    return (
        <div className="single-astro-info-section">
            <p className="astro-match-title">
                {astroMatch.title}
            </p>
            <div className="astro-card-image-container">
                <img src={astroMatch.url} alt={astroMatch.title} className="astro-image-info-page"/>
            </div>
            <div className="explanation-container">
                <p className="astro-match-explanation">{astroMatch.explanation}</p>
            </div>
        </div>
    );
};

export default SingleAstroInfoCard;
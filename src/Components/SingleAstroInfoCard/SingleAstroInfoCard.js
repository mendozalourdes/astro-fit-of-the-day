import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './SingleAstroInfoCard.css'
import { formatDate } from '../../Utils/utils'

const SingleAstroInfoCard = ({astroData, id, astroMatch}) => {
    return (
        <section className="single-astro-info-section">
            <p className="astro-match-title">
                {astroMatch.title}
            </p>
            <p className="astro-match-date">
                Date of Capture: {formatDate(astroMatch.date)} 
            </p>
            <div className="astro-card-image-container">
                <img src={astroMatch.url} alt={astroMatch.title} className="astro-image-info-page"/>
            </div>
            <div className="explanation-container">
                <p className="astro-match-explanation">{astroMatch.explanation}</p>
            </div>
        </section>
    );
};

export default SingleAstroInfoCard;
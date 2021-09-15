import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const SingleAstroInfoCard = ({astroData, id, astroMatch}) => {
    console.log("singleInfoAll", astroData)
    console.log("astroMatch", astroMatch)
    console.log("id", id)
    return (
        <div className="single-astro-info-section">
            <p>
                {astroMatch.title}
            </p>
                <img src={astroMatch.url} alt={astroMatch.title} className="astro-image"/>
                <p>{astroMatch.explanation}</p>
        </div>
    );
};

export default SingleAstroInfoCard;
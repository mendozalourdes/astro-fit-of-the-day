import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import SingleAstroCard from '../SingleAstroCard/SingleAstroCard';

const AllAstroCards = ({astroData}) => {
    console.log('allCards', astroData)

    const allAstroData = astroData.map((data, i) => {
        return (
            <SingleAstroCard 
                id={i}
                key={i}
                date={data.date}
                explanation={data.explanation}
                hdurl={data.hdurl}
                title={data.title}
                url={data.url} 
                button={true}           
            />
            
        )
    })

    return (
        <div className="all-astro-data">
            {allAstroData}
        </div>
    );
};



export default AllAstroCards;

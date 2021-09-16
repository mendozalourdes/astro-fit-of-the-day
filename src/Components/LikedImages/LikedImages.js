import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import SingleAstroCard from '../SingleAstroCard/SingleAstroCard';

const LikedImages = ({favorites}) => {
console.log("favorites!!!!", favorites)
const allFavorites = favorites


// const allFavoritesData = allFavorites.map((data, i) => {
//         return (
//             <SingleAstroCard
//                 // addToFavorites={addToFavorites}
//                 // removeFromFavorites={removeFromFavorites}
//                 id={i}
//                 key={i}
//                 date={data.date}
//                 explanation={data.explanation}
//                 hdurl={data.hdurl}
//                 title={data.title}
//                 url={data.url}        
//             />
            
//         )
//     })

    // console.log("favorites???", favorites)
    return (
        <div>
            {/* <p>These are your favorites</p> */}
            
            {/* {allFavoritesData} */}
        </div>
    );
};

export default LikedImages;

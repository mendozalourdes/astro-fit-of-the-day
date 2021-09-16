import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import SingleAstroCard from '../SingleAstroCard/SingleAstroCard';
import { useState } from 'react';
import LikedImages from '../LikedImages/LikedImages';
import './AllAstroCards.css'

const AllAstroCards = ({astroData}) => {

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (id) => {
        let newFavorite = astroData[id]
        if (!favorites.includes(newFavorite)){
          setFavorites([...favorites, newFavorite])  
        } else {
          return null
        }
      }

      const removeFromFavorites = (className) => {
          const allFaves = favorites
          let remainingFavorites = allFaves.filter( fave => {
              if(!fave.title.includes(className)) {
                  return fave
              }
          })
        setFavorites([...remainingFavorites])
        } 
      



    const allAstroData = astroData.map((data, i) => {
        return (
            <SingleAstroCard 
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                id={i}
                key={i}
                date={data.date}
                explanation={data.explanation}
                hdurl={data.hdurl}
                title={data.title}
                url={data.url} 
                buttonStyle={true}           
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

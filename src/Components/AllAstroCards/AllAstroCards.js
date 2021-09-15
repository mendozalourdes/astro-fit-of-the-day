import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import SingleAstroCard from '../SingleAstroCard/SingleAstroCard';
import { useState } from 'react';


const AllAstroCards = ({astroData}) => {
    // console.log('allCards', astroData)

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (id) => {
        let newFavorite = astroData[id]
        console.log("newFavorite", newFavorite)
        console.log("asllAstroFavres", favorites) 
        if (!favorites.includes(newFavorite)){
          setFavorites([...favorites, newFavorite])  
          console.log("updatedFavorites?", favorites)
        } else {
          return null
        }
      }

      const removeFromFavorites = (className) => {
          console.log("removooooveee", className)
          const allFaves = favorites
          let remainingFavorites = allFaves.filter( fave => {
              console.log("faveeeee", fave)
              if(!fave.title.includes(className)) {
                  return fave
              }
          })

        //   let remainingFavorites = favorites.filter(fave => fave.includes(className))
          console.log("remain", remainingFavorites)
        // let remainingFavorites = favorites.filter((data, index) => id !== index )
        setFavorites([...remainingFavorites])
        console.log("removed?", favorites)
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

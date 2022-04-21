import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import SingleAstroCard from '../SingleAstroCard/SingleAstroCard';
import { useState, useEffect } from 'react';
import './AllAstroCards.css'
import { formatDateURL } from '../../Utils/utils'

const AllAstroCards = ({astroData}) => {

    const useLocalStorage = (storageKey, fallbackState) => {
        const [value, setValue] = useState(
          JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
        );
      
        useEffect(() => {
          localStorage.setItem(storageKey, JSON.stringify(value));
        }, [value, storageKey]);
      
        return [value, setValue];
      };
    

      const [favorites, setFavorites] = useLocalStorage('favorites', []);

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

   

    const allFaves = favorites.map((data, i) => {
        let url = `https://apod.nasa.gov/apod/ap${formatDateURL(data.date)}.html`

        return (
            <section>
               <a className="favorite-links" target="_blank" href={url}>• {data.title}</a>
            </section>
            
        )
    })


    return (
        <section className="all-cards-section"> 
       { favorites.length > 0 &&  <section className="favorites-names">
                <p>These are your favorite astro-card names:</p>
                     {(favorites.length > 0) && <div >{allFaves}</div>}
            </section>}
            <div className="all-astro-data">
                {allAstroData}
            </div>
        </section>
    );
};



export default AllAstroCards;

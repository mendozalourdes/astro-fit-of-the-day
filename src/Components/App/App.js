import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import {Route, Switch } from 'react-router-dom';
import { fetchNASAData } from '../../Utils/apiCalls'
import Header from '../Header/Header';
import Home from '../Home/Home';
import AllAstroCards  from '../AllAstroCards/AllAstroCards';
import SingleAstroCard from '../SingleAstroCard/SingleAstroCard';
import SingleAstroInfoCard from '../SingleAstroInfoCard/SingleAstroInfoCard';
import loadingSpin from '../Images/loadingSpin.gif';
import LikedImages from '../LikedImages/LikedImages';


function App() {

  const [error, setError ] = useState('');
  const [ astroData, setAstroData ] = useState('')
  const [ isLoading, setIsLoading ] = useState('')

  const getNASAData = async () => {
    setIsLoading(true)
    setError('')
    setAstroData('')
    try {
        let astroData = await fetchNASAData()
        setIsLoading(false);
        setAstroData(astroData)
      } catch (error) {
        setError(error.message)
        setIsLoading(false);
    }
  }

  useEffect(() => {
    getNASAData();
  }, [])
  

  if (!astroData) {
    return (
      <>
      <Header />
      <section className='loading-container'>
        <p className="loading-message">Thanks for your patience while we get your images from space! It's a long trek.</p>
        <img className='loading' src={loadingSpin} />
      </section>
      </>
    )
  }

  if (astroData) {


  return (
    <main className="Astro-fit-of-the-day">
      <Header/>
      <Switch>
        <Route exact path ="/" render={() =>
          <AllAstroCards astroData={astroData}/>
        }/>
        <Route exact path ="/astro-info/:id" render={({match}) => {
          let astroMatch = astroData[match.params.id]
          return (
            <SingleAstroInfoCard astroData={astroData} id={match.params.id} astroMatch={astroMatch}/>

            )
        }
        }/>
        
      </Switch>
    </main>
  );
  }
}

export default App;

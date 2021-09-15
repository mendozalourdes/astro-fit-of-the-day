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
  
  console.log("astroData", astroData)

  if (!astroData) {
    return (
      <h1>I'm still loading!</h1>
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
          // console.log("match.params", match.params.id)
          // console.log("astrooo", astroData[0])
          let astroMatch = astroData[match.params.id]
          // console.log("astromatch??", astroMatch)

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

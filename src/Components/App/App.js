import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import {Route, Switch } from 'react-router-dom';
import { fetchNASAData } from '../../Utils/apiCalls'
import Header from '../Header/Header'
import Home from '../Home/Home'

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
  return (
    <div className="Astro-fit-of-the-day">
      <Header/>
      {/* <Home/> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchNASAData } from '../../Utils/apiCalls'

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
      <header className="App-header">
      <h1>Astro Fit of the Day</h1>
        <p>
         Coming Soon!
        </p>
      </header>
    </div>
  );
}

export default App;

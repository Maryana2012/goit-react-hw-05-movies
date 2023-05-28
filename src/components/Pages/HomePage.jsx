import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import TrendingFilmsList from 'components/TrendingFilmsList/TrendingFilmsList';

export default function HomePage() {

  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
      setResults([...results, ...response.data.results]);  
    }
    catch(error){console.log(error)}
  }
    axiosResponse();
  },[])

  return (<>
    <div>Trending Today</div>
    
    <TrendingFilmsList results={ results} />
   </>
      
     
  )
}


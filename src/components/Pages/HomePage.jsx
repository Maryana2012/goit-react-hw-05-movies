import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {

  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
      setResults(response.data.results); 
    }
    catch(error){console.log(error)}
  }
    axiosResponse();
  },[])

  return (<>
    <div>Trending Today</div>
    <ul>{results.map(film => <li key={film.id}><Link to={`movies/${film.id}`} state={location}>{film.name}{film.title}</Link>
            </li>)}
            </ul>
   </>
      
     
  )
}


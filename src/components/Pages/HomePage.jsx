import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../Pages/HomePage.module.css'

export default function HomePage() {

  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    localStorage.clear();
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
    <h1 className={css.title}>Trending Today</h1>
    <ul className={css.list}>{results.map(film =>
      <li className={css.item} key={film.id}>
        <Link className={css.link} to={`movies/${film.id}`} state={location}>{film.name}{film.title}</Link>
            </li>)}
            </ul>
   </>
      
     
  )
}


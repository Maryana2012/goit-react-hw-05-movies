import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom"

export default function MoviesPage() {
    const [query, setQuery] = useSearchParams('q');
    const [searchedFilms, setSearchedFilms] = useState([]);
    const queryInput = query.get('q') ?? '';
    const locationMovies = useLocation();
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            alert("Enter a word for search")
        }
        axiosResponse(queryInput);
    }
    const axiosResponse = async (queryInput) => {
    const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078&query=${queryInput}`);
        setSearchedFilms(response.data.results);
        return searchedFilms;
    }
    catch(error){console.log(error)}
    
    }

    const updateQueryString=(event)=> {
        if (event.target.value === '') {
           return setQuery({});
        }
        setQuery({ q: event.target.value });        
    }
    
    return (
        <div>
            <form onSubmit={ handleSubmit }> 
            <input type="text"
                   onChange={updateQueryString}
                   value={ queryInput} />
            <button type="submit">Search</button>
            </form>
            <ul>
                {searchedFilms.map(film => <li key={film.id}><Link to={`${film.id}`} state={locationMovies}>{film.name}{ film.title}</Link></li> )}
            </ul>
        </div>
    )
}


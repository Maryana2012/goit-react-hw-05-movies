import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import css from '../Pages/MoviesPage.module.css'

export default function MoviesPage() {
    const [query, setQuery] = useSearchParams('q');
    const [searchedFilms, setSearchedFilms] = useState(JSON.parse(window.localStorage.getItem('films')) ?? []);
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
        if(response.data.results.length === 0){ alert('Sorry, there are no films for your request')}
        localStorage.setItem('films', JSON.stringify(response.data.results));
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
            <form  className={css.form} onSubmit={ handleSubmit }> 
            <input className={css.input} type="text"
                   onChange={updateQueryString}
                   value={ queryInput} />
            <button className={css.button__search} type="submit">Search</button>
            </form>
            <ul>
                {searchedFilms.map(film =>
                    <li className={css.item} key={film.id}>
                        <Link className={css.link} to={`${film.id}`} state={locationMovies}>{film.name}{film.title}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}


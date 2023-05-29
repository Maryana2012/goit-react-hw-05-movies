import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

export default function FilmDetails() {
    
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [overview, setOverview] = useState('')
  const [genres, setGenres] = useState([]);

  const params = useParams()
  const id = Object.values(params)
  const idNumber = Number(id[0]);

  const location = useLocation();
  const backLink = useRef(location.state ?? '/')
  const navigate = useNavigate();  
            
  useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${idNumber}`;
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
      setImg(response.data.poster_path);
      setName(response.data.name)
      setTitle(response.data.title);
      const getYear = () => new Date(response.data.release_date).getFullYear();
      setYear(getYear)
      setGenres(response.data.genres);
      setOverview(response.data.overview); 
    }
    catch(error){console.log(error)}
  }
    axiosResponse();
  }, [idNumber])
  
 
 const handleBack=()=> {
       navigate(backLink.current) 
  }
  

  return (
        <>
        <button type="button" onClick={handleBack}>Go back</button>
            <img src={`https://image.tmdb.org/t/p/w200${img}`} alt={title} />
            <h2>{title}</h2>
            <h2>{name}</h2>
            <h3><span>(</span>{year}<span>)</span></h3>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.map(genre => { return <p key={genre.name}>{genre.name}</p> })}
            
            <p>Additional information</p>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet />

        </>
    )
}

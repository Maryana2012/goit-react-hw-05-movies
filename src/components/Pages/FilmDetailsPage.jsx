import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FilmDetailsCard from "components/FilmDetailsCard/FilmDetailsCard";

export default function FilmDetails() {
    
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [overview, setOverview] = useState('')
  const [genres, setGenres] = useState([]);

    const params = useParams()
    const id = Object.values(params)
    const idNumber=Number(id[0])
            
    useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${idNumber}`;
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
      setImg(response.data.poster_path);
      setName(response.data.name)
      setTitle(response.data.title);
      setYear(response.data.release_date)
      setGenres(response.data.genres);
      setOverview(response.data.overview); 
    }
    catch(error){console.log(error)}
  }
    axiosResponse();
  },[])
    
  return <>
    <FilmDetailsCard img={img}
      name={name}
      title={title}
      year={year}
      genres={genres}
      overview={overview}
      id={id } />
           </>
}

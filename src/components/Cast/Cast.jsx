import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from './Cast.module.css';

export default function Cast() {
 
    const [actors, setActors] = useState([]);
    const params = useParams();
    const id = Object.values(params)
    const idNumber = Number(id[0])
   
    useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${idNumber}/credits`;
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
         setActors(response.data.cast);
      }
    catch(error){console.log(error)}
  }
    axiosResponse();
    }, [idNumber])
    
    return (
      <div className={css.container}> {actors.map((actor) => {
        return <div className={css.container__actor} key={actor.id}>
          <img className={css.img} src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt=''/>
                <p className={css.title}>{actor.name}</p>
                <p className={css.title}>{actor.character} </p>
        </div>
        }
            
        )}
        </div>
    )
}


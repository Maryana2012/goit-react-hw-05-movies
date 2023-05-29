import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <> {actors.map((actor) => { return <div  key={actor.id}><img  src={actor.profile_path} alt="actor.name" />
                <p>{actor.name}</p>
                <p>{actor.character} </p>
        </div>
        }
            
        )}
        </>
    )
}

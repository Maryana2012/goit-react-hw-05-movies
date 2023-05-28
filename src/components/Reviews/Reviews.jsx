import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {

   const [review, setReview]=useState([])
   const params = useParams();
    const id = Object.values(params)
    const idNumber = Number(id[0])
   
    useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${idNumber}/reviews`;
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
        console.log(response.data.cast);
        setActors([...actors,...response.data.cast]);
        // console.log(actors);
    }
    catch(error){console.log(error)}
  }
    axiosResponse();
  },[])
    return <div>reviews</div>
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
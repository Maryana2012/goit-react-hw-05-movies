import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css';

export default function Reviews() {

  const [articles, setArticles] = useState([]);
   const params = useParams();
    const id = Object.values(params)
    const idNumber = Number(id[0]);
   
    useEffect(() => {
    const axiosResponse = async () => {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${idNumber}/reviews`;
    try {
      const response = await axios.get(`${BASE_URL}?api_key=9dc8cf1c3b797577de272ea272eaf078`);
      setArticles(response.data.results);
    }
    catch(error){console.log(error)}
  }
    axiosResponse();
    }, [idNumber])
    
  return (
   
    <div>
      {articles.length === 0 && <p>Sorry, there are no reviews</p> }
      {articles.map(article => 
      { 
        return <div key={article.id}>
          <div className={css.author}>
          <p className={css.title}>Author:</p>
          <p>{article.author}</p>
          </div> 
         
          <p className={css.title}>Content:</p>
          <p className={css.content}>{ article.content}</p>
        </div>
        
      }
      )
      }
    </div>)
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
// articles.map((el) => {
//             <div key={el.author}>
//                 <p>Author:</p>
//                 <p>{el.author}</p>
//                 <p>{ el.content}</p>
//             </div>
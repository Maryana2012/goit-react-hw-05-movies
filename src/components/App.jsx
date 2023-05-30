import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
import FilmDetails from './Pages/FilmDetailsPage';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage'
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='/movies/:filmId' element={<FilmDetails />} >
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={ <Reviews/>} />
        </Route>
       
      </Route>
      
   </Routes>
  )
}



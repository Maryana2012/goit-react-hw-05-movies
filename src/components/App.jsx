import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const FilmDetails = lazy(() => import('./Pages/FilmDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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



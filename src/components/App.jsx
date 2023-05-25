import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage'

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
         <Route index element={<HomePage/>} />
         <Route path='movies' element={<MoviesPage/>} />
      </Route>
      
   </Routes>
  )
}


// 9dc8cf1c3b797577de272ea272eaf078

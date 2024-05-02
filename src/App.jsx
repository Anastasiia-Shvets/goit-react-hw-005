import './App.css'
import { Suspense, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieReviews from './components/MovieReviews/MovieReviews'
import MovieCast from './components/MovieCast/MovieCast'

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))


function App() {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='/movies/:movieId/cast' element={<MovieCast />} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

import './App.css'
import { Suspense, lazy, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'

function App() {
  const HomePage = lazy(() => import('./pages/HomePage'))
  const MoviesPage = lazy(() => import('./pages/MoviesPage'))
  const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'))
  const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

  return (
    <>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        <Link to='/movies/:movieId'>Movie details</Link>
        <Link to='*'>NotFoundPage</Link>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='/movies/:movieId/cast' element={<MovieCast />} />
            <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App

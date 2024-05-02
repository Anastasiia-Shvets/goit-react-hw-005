import React from 'react';
import { Link } from 'react-router-dom';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import GoBackBtn from '../components/GoBtn/GoBackBtn';

const MovieDetails = ({ movie }) => {
    if (!movie || !movie.title) {
        return null;
    }

    return (
    <>
    <GoBackBtn />
        <div className="movie-card">
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )}
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
            <Link to='/movies/:movieId/cast'>Cast</Link>
            <Link to='/movies/:movieId/reviews'>Reviews</Link>
            <ul>
                <li><MovieCast /></li>
                <li><MovieReviews /></li>
            </ul>
        </>
    )

};

export default MovieDetails;
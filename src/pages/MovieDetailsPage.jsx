import React, { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import GoBackBtn from '../components/GoBtn/GoBackBtn';

const MovieDetails = () => {
    const { movieId } = useParams();
    useEffect(() => {
        if (!movieId) return;
    }, [movieId]);

    return (
        <>
            <GoBackBtn />
            {/* <div className="movie-card">
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )}
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div> */}
            <Link to='cast'>Cast</Link>
            <Link to='reviews'>Reviews</Link>
            <Outlet />
        </>
    )

};

export default MovieDetails;
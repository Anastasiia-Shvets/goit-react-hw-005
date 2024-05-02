import React from 'react';

const MovieDetails = ({ movie }) => {
    if (!movie || !movie.title) {
        return null;
    }

    return (
        <div className="movie-card">
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )}
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetails;
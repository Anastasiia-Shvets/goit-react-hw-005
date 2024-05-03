import React, { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import GoBackBtn from '../components/GoBtn/GoBackBtn';
import { fetchMovieDetails } from '../API/detailsApi';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = React.useState(null);

    useEffect(() => {
        if (!movieId) return;

        const fetchDetails = async () => {
            try {
                const movieDetails = await fetchMovieDetails(movieId);
                setMovie(movieDetails);
            } catch (error) {
                Error(error);
            }
        };

        fetchDetails();
    }, [movieId]);

    if (!movie) return null;

    return (
        <>
            <GoBackBtn />
            <section>
                {movie.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                )}
                <div className='style.details'>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                </div>
            </section>
            <div>
                <p>Additional information</p>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
                <Outlet />
            </div>
        </>
    );
};

export default MovieDetails;
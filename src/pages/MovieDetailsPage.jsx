import React, { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import GoBackBtn from '../components/GoBtn/GoBackBtn';
import { fetchMovieDetails } from '../API/detailsApi';
import style from './MovieDetails.module.css'

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
            <section className={style.section}>
                <div>
                    {movie.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={style.img} />
                )}
                </div>
                
                <div className={style.details}>
                    <h2>{movie.title}</h2>
                    <ul className={style.list}>
                        <li className={style.item}><p>{movie.overview}</p></li>
                        <li className={style.item}><h3>Release Date: </h3>
                            <p>{movie.release_date}</p>
                        </li>
                        <li className={style.item}>
                            <h3>Rating: </h3>
                            <p>{movie.vote_average}</p>

                        </li>
                    </ul>
                </div>
            </section>
            <div>
                <div>
                    <h3 className={style.titleInform}>Additional information</h3>
                </div>
                
                <div className={style.link}>
                    <Link to='cast'><h2>Cast</h2></Link>
                    <Link to='reviews'><h2>Reviews</h2></Link>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default MovieDetails;
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { creditsMovie } from '../../API/creditsApi';
import { useEffect, useState } from 'react';
import style from './MovieCast.module.css'

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieCredits = async () => {
            try {
                const response = await creditsMovie({movieId});
                setCast(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieCredits();

    }, [movieId]);

    return (
        <div>
            <h2>Movie Cast</h2>
            <ul className={style.cast}>
                {cast.map(actor => (
                    <li key={actor.id} className={style.castItem}>
                        <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                        {actor.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
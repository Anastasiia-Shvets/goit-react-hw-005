import { useParams } from 'react-router-dom';
import { creditsMovie } from '../../API/creditsApi';
import { useEffect, useState } from 'react';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieCredits = async () => {
            try {
                const response = await creditsMovie(movieId)
                setCast(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieCredits();

    }, [movieId]);

    return (
        <div>
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
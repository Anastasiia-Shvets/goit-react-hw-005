import { useParams } from 'react-router-dom';
import { creditsMovie } from '../../API/creditsApi';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieCredits = async () => {
            try {
                const response = await creditsMovie()
                setCast(response.data.cast);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieCredits();

    }, [movieId]);

    return (
        <div>
            <h2>Movie Cast</h2>
            <ul>
                {cast.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
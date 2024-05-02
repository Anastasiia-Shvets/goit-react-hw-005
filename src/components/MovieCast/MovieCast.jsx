import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieCredits = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
                    params: {
                        api_key: '19e9c4b8192481007639a2f9632cbc71'
                    }
                });
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
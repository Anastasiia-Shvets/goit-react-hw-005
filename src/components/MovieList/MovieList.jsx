import { Link, useLocation } from "react-router-dom"
import style from './MovieList.module.css'

const MovieList = ({ movies }) => {
    if (!movies) {
        return null;
    }
    const location = useLocation();
    return (
        <ul className={style.list}>
            {movies.map((movie) => (
                <li key={movie.id} className={style.item}>
                    <Link to={`/movies/${movie.id}`} state={location} className={style.link}>{movie.title}
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} />
                    </Link>
                </li>
            )
            )}
        </ul>
    )
}
export default MovieList
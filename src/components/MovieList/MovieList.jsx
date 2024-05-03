import { NavLink, useLocation } from "react-router-dom"
import style from './MovieList.module.css'

const MovieList = ({ movies }) => {
    const location = useLocation()
    return (
        <ul className={style.list}>
            {movies && movies.map((movie) => (
                <li key={movie.id}>
                    <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                    </NavLink>
                </li>
            )
            )}
        </ul>
    )
}
export default MovieList
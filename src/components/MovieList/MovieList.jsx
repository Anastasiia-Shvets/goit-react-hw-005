import { NavLink } from "react-router-dom"
import style from './MovieList.module.css'

const MovieList = ({ movies }) => {
    return (
        <ul className={style.list}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</NavLink>
                </li>
            )
            )}
        </ul>
    )
}
export default MovieList
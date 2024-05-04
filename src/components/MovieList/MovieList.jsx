import { NavLink, useLocation } from "react-router-dom"
import style from './MovieList.module.css'

const MovieList = ({ movies }) => {
    const location = useLocation()
    return (
        <ul className={style.list}>
            {movies && movies.map((movie) => (
                <li key={movie.id} className={style.item}>
                    <NavLink to={`/movies/${movie.id}`} state={{ from: location }} className={style.link}>{movie.title}
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} />
                    </NavLink>
                </li>
            )
            )}
        </ul>
    )
}
export default MovieList
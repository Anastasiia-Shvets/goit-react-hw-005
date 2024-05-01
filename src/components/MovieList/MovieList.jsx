import { NavLink } from "react-router-dom"

const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.Id}>
                    <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</NavLink>
                </li>
            )
            )}
        </ul>
    )
}
export default MovieList
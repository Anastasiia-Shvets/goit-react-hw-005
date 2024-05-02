import { useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import Loader from "../components/Loader/Loader"
import MovieList from "../components/MovieList/MovieList"

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (query) => {
        setIsLoading(true);
        try {
            const searchData = await searchMovie(query);
            console.log(searchData.results);
            setMovies(searchData.results);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            {isLoading && <Loader />}
            {error && <p>Sorry. Something went wrong.</p>}
            {movies && <MovieList />}
        </>
    )
}
export default MoviesPage
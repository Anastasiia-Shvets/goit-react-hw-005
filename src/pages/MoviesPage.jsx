import { useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import Loader from "../components/Loader/Loader"
import MovieList from "../components/MovieList/MovieList"
import { Toaster } from "react-hot-toast"

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (query) => {
        setIsLoading(true);
        try {
            const searchData = await searchMovie(query);
            console.log(searchData.data.results);
            setMovies(searchData.data.results);
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
            {movies.length > 0 && <MovieList movies={movies} />}
            <Toaster position="top-center" />
        </>
    )
}
export default MoviesPage
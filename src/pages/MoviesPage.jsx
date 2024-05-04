import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import Loader from "../components/Loader/Loader"
import MovieList from "../components/MovieList/MovieList"
import { Toaster } from "react-hot-toast"

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fatchMoviesPage = async (query) => {
            setIsLoading(true);
            try {
                const searchData = await searchMovie(query);
                console.log(searchData.data);
                setMovies(searchData.data);
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false);
            }
        }
        fatchMoviesPage();
    }, [setMovies]);

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!query.trim()) {
            return ('Please enter correct value.');
        }
        onSubmit(query);
        setMovies('')

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
}
export default MoviesPage
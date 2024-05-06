import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import Loader from "../components/Loader/Loader"
import MovieList from "../components/MovieList/MovieList"
import { Toaster } from "react-hot-toast"
import { useSearchParams } from "react-router-dom"
import { searchMovie } from "../API/searchApi"

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;
        const fetchMoviesPage = async (query) => {
            setIsLoading(true);
            try {
                const searchData = await searchMovie(query);
                console.log(searchData);
                setMovies(searchData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        if (query) {
            fetchMoviesPage(query);
        }
    }, [query,]);

    const handleSubmit = query => {
        setSearchParams({ query: query });
    }

    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            {isLoading && <Loader />}
            {error && <p>Sorry. Something went wrong.</p>}
            {!movies && <p>Sorry. Something went wrong.</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
            <Toaster position="top-center" />
        </>
    )
}

export default MoviesPage;

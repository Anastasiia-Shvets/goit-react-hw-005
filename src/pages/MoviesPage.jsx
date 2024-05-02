import { useState } from "react"
import Header from "../components/Header/Header"
import SearchBar from "../components/SearchBar/SearchBar"
import Loader from "../components/Loader/Loader"
import { Toaster } from "react-hot-toast"
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
            <Header />
            <SearchBar onSubmit={handleSubmit} />
            {isLoading && <Loader />}
            {error && <p>Sorry. Something went wrong.</p>}
            {movies && <MovieList />}
            <Toaster position="top-center" />
        </>
    )
}
export default MoviesPage
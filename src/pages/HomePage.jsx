import { useEffect } from "react";
import { useState } from "react"
import { Toaster } from "react-hot-toast";
import { fetchMovies } from "../API/trendingApi";
import Header from "../components/Header/Header";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchMovies()
                console.log(data);
                setMovies(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData()
    }, []);
    return (
            <>
                <Header />
                <h1>Trendihg today</h1>
                {isLoading && <Loader />}
                {error && notyfy('Sorry. Something went wrong.')}
                {movies && <MovieList movies={movies} />}
                <Toaster position="top-center" />
            </>
    )

}
export default HomePage
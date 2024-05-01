import { useEffect } from "react";
import { useState } from "react"
import { Toaster } from "react-hot-toast";
import { fetchMovies } from "../API/trendingApi";
import Header from "../components/Header/Header";
import MovieList from "../components/MovieList/MovieList";

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
        <Section>
            <Conteiner>
                <Header />
                <h1>Trendihg today</h1>
                {isLoading && <Loader />}
                {error && notyfy('Sorry. Something went wrong.')}
                {movies.length > 0 && <MovieList movies={movies} />}
                <Toaster position="top-center" />
            </Conteiner>
        </Section>
    )

}
export default HomePage
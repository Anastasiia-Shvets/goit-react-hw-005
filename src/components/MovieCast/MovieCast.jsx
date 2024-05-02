    const MovieCast = () => {
        const { movieId } = useParams();
        useEffect(() => {
            if (!movieId) return;
        }, [movieId]);
    }
    export default MovieCast
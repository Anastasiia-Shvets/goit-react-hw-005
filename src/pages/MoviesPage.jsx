import SearchBar from "../components/SearchBar/SearchBar"

const MoviesPage = () => {

    return (
        <>
            <SearchBar onSubmit={onHandleSubmit} />
        </>
    )
}
export default MoviesPage
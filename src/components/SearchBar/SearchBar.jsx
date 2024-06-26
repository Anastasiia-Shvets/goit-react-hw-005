import { useState } from "react"
import toast from "react-hot-toast";
import style from './SearchBar.module.css'
import MovieList from "../MovieList/MovieList";

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState([]);

    const handleChange = evt => {
        setQuery(evt.target.value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!query.trim()) {
            return toast.error('Please enter correct value.');
        }
        onSubmit(query);
        setQuery('');
        setSearch(search);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleChange}
                    className={style.input} />
                <button type="submit" className={style.btn}>Search</button>
            </form>
            <div>
                {query && <MovieList />}
            </div>
            
            
        </div>
    );
}
export default SearchBar
import axios from 'axios'

const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWU5YzRiODE5MjQ4MTAwNzYzOWEyZjk2MzJjYmM3MSIsInN1YiI6IjY2MmU4NDM3MjRmMmNlMDEyMDJhY2I2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAJL0N9fMpcdSromGbS5JlczR_WW-N95FQ2ntMCWyUY'
    }
};

export const fetchMovies = async () => {
    try {
        const response = await axios.get(trendingUrl, options);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

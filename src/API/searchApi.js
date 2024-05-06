import axios from 'axios'

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWU5YzRiODE5MjQ4MTAwNzYzOWEyZjk2MzJjYmM3MSIsInN1YiI6IjY2MmU4NDM3MjRmMmNlMDEyMDJhY2I2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAJL0N9fMpcdSromGbS5JlczR_WW-N95FQ2ntMCWyUY'
    }
};

export const searchMovie = async (query) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    try {
        const response = await axios.get(searchUrl, options);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        Error('Failed to search for movies');
    }
};
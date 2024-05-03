import axios from 'axios'

const searchUrl = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWU5YzRiODE5MjQ4MTAwNzYzOWEyZjk2MzJjYmM3MSIsInN1YiI6IjY2MmU4NDM3MjRmMmNlMDEyMDJhY2I2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAJL0N9fMpcdSromGbS5JlczR_WW-N95FQ2ntMCWyUY'
    }
};

export const searchMovie = async (query) => {
    try {
        if (!query) {
            alert ('Please enter value.');
        }

        const response = await axios.get(searchUrl, options, {
            params: {
                query: query,
                include_adult: false,
                language: 'en-US',
                page: 1,
                api_key: apiKey
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        Error('Failed to search for movies');
    }
};

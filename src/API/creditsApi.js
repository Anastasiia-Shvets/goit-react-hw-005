import axios from 'axios'
const apiKey = '19e9c4b8192481007639a2f9632cbc71';

const creditsUrl = `https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US`;
const options = {
    params: {
        api_key: apiKey
    }
};

export const creditsMovie = async (movieId) => {
    try {
        const response = await axios.get(creditsUrl, options, movieId);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};
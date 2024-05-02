import axios from 'axios'
const apiKey = '19e9c4b8192481007639a2f9632cbc71';

const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
const options = {
    params: {
        api_key: apiKey
    }
};

export const reviewsMovie = async () => {
    try {
        const response = await axios.get(reviewsUrl, options);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};
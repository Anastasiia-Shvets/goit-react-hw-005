import axios from 'axios';

const apiKey = '19e9c4b8192481007639a2f9632cbc71';

const options = {
        params: {
            api_key: apiKey
        }
    };

export const creditsMovie = async ({movieId}) => {
    try {
        const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const response = await axios.get(creditsUrl, options);
        return response.data.cast;
    } catch (error) {
        console.error(error);
    }
};
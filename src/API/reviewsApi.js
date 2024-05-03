import axios from 'axios'
const apiKey = '19e9c4b8192481007639a2f9632cbc71';


const options = {
    params: {
        api_key: apiKey
    }
};

export const reviewsMovie = async (movieId) => {
    const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
    try {
        const response = await axios.get(reviewsUrl, options);
        console.log(response.data);
        return response.data.results;
    } catch (error) {
        Error(error);
    }
};
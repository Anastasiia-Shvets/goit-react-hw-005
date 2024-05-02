import axios from 'axios';

const apiKey = '19e9c4b8192481007639a2f9632cbc71';

export const fetchMovieDetails = async (movieId) => {
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`;

    try {
        const response = await axios.get(detailsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw new Error('Failed to fetch movie details');
    }
};
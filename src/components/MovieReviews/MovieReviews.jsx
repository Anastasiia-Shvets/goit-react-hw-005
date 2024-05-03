import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsMovie } from "../../API/reviewsApi ";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState();

    useEffect(() => {


        const fetchReviews = async () => {
            try {
                const dataReviews = await reviewsMovie();
                console.log(dataReviews);
                setReviews(dataReviews);
            } catch (error) {
                Error(error);
            } finally {

            }
        }
        fetchReviews();
    }, [movieId]);

    return (
        <div>
            <h2>Movie Reviews</h2>
            <ul>
                {reviews ? (
                    reviews.map((review, index) => (
                        <li key={index}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))
                ) : (
                    <p>We don't have any reviews for this movie.</p>
                )}
            </ul>
        </div>
    )

}
export default MovieReviews;
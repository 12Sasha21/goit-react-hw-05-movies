import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../services/movies-api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    api.fetchReviewsInfo(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>'We don`t have any reviews for this movie.'</p>
      )}
    </div>
  );
}

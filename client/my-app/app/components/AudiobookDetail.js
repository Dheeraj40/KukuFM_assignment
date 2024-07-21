'use client';
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import styles from '../../styles/Detail.module.css';

const AudiobookDetail = ({ audiobook }) => {
  const [reviews, setReviews] = useState(audiobook.reviews);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className={styles.container}>
      <img src={audiobook.coverImage} alt={audiobook.title} className={styles.coverImage} />
      <h1>{audiobook.title}</h1>
      <p>by {audiobook.author}</p>
      <p>{audiobook.description}</p>
      <p>Genre: {audiobook.genre}</p>
      <p>Rating : {audiobook.rating}</p>
      <h3>Reviews:</h3>
      {reviews.map((review) => (
        <div key={review._id} className={styles.review}>
          <h4>{review.user}</h4>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      <ReviewForm audiobookId={audiobook._id} addReview={addReview} />
    </div>
  );
};

export default AudiobookDetail;

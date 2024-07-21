'use client';
import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Form.module.css';

const ReviewForm = ({ audiobookId, addReview }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { user, rating, comment };
    const response = await axios.post(`http://localhost:5000/api/audiobooks/${audiobookId}/reviews`, review);
    addReview(response.data); // Update the reviews list
    setUser('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (0-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="5"
        required
      />
      <textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

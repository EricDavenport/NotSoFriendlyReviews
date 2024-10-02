import React from 'react';
import './Reviews.css';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-container">
      <h2>Not So Friendly Reviews</h2>
      <ul className="reviews-list">
        {reviews.map(review => (
          <li key={review.id} className="review-card">
            <h3>{review.title}</h3>
            <p className="review-info">By: {review.name} | Date: {review.date}</p>
            <p className="review-content">{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
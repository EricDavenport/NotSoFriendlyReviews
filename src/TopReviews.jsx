import React, { useEffect, useRef, useState } from 'react';
import './TopReviews.css';

const TopReviews = ({ reviews }) => {
  const scrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed here

      scrollContainer.style.setProperty('--scroll-width', `${scrollWidth / 2}px`);
      scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
      
      // Short delay to ensure content is rendered before starting animation
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, [reviews]);

  const topReviews = reviews.slice(0, 10);

  return (
    <div className="top-reviews-container">
      <h2>Top Reviews</h2>
      <div className={`top-reviews-scroll ${isLoaded ? 'animate' : ''}`} ref={scrollRef}>
        {[...topReviews, ...topReviews].map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.title}</h3>
            <p className="review-info">By: {review.name}</p>
            <p className="review-content">{review.review.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopReviews;

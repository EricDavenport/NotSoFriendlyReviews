import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required";
    if (!name.trim()) formErrors.name = "Name is required";
    if (!review.trim()) formErrors.review = "Review is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addReview({ title, name, review });
      // Clear the form
      setTitle('');
      setName('');
      setReview('');
      setErrors({});
    }
  };

  return (
    <div className="review-form-container">
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          {errors.review && <span className="error">{errors.review}</span>}
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;

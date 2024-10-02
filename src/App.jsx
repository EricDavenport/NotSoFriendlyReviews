import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import TopReviews from './TopReviews'
import './App.css'

const App = () => {
  const [reviews, setReviews] = useState([
    { id: 1, title: "Terrible Coffee Shop", name: "John Doe", date: "2023-04-15", review: "Worst coffee I've ever had. Avoid at all costs." },
    { id: 2, title: "Overrated Restaurant", name: "Jane Smith", date: "2023-04-10", review: "Food was mediocre and overpriced. Not worth the hype." },
    { id: 3, title: "Disappointing Movie", name: "Bob Johnson", date: "2023-04-05", review: "Two hours of my life I'll never get back. Plot was nonsensical." },
    // Add more reviews here to see the scrolling effect
  ]);

  const addReview = (newReview) => {
    setReviews([{ ...newReview, id: reviews.length + 1, date: new Date().toISOString().split('T')[0] }, ...reviews]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div>
                <ReviewForm addReview={addReview} />
                <TopReviews reviews={reviews} />
              </div>
            } />
            <Route path="/reviews" element={<Reviews reviews={reviews} />} />
            <Route path="/about" element={<h1>About Us</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

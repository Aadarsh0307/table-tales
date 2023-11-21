import React, { useState } from 'react';
import "./RestaurantOne.css";
import "./BookTable.js";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Rating from 'react-rating-stars-component';

// import dayjs from 'dayjs';

function RestaurantOne() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [userAvatars, setUserAvatars] = useState({
    userId1: 'url-to-avatar1',
    userId2: 'url-to-avatar2',
    // Add more user avatars as needed
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleIncrement = () => {
    if (numberOfPersons < 20) {
    setNumberOfPersons((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (numberOfPersons > 1) {
      setNumberOfPersons((prevCount) => prevCount - 1);
    }
  };

  const handlePersonChange = (event) => {
    setNumberOfPersons(parseInt(event.target.value, 10));
  };

  const [selectedTime, setSelectedTime] = useState('08:00');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  function calculateAverageRating() {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / reviews.length || 0;
    return averageRating.toFixed(1);
  }

  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      setReviews((prevReviews) => [...prevReviews, { text: newReview, rating: userRating }]);
      setNewReview('');
    }
  };

  const [visibleReviews, setVisibleReviews] = useState(3);

  // Function to handle "Read More" click
  const handleReadMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };

  // Slice the reviews array to only show the visible reviews
  const visibleReviewsList = reviews.slice(0, visibleReviews);

  const Images = {
    background: `url(${process.env.PUBLIC_URL}/profile-background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const restaurantImg = {
    background: `url(${process.env.PUBLIC_URL}/restaurantOne.jpg)`,
    width: '100%', 
    height: '100%', 
    borderRadius: '10px',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const pageStyle = {
    background: `url(${process.env.PUBLIC_URL}/restaurant-info.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const [time, setTime] = useState('10:00');

  const onChange = (value) => {
    setTime(value);
  };
  return (
    <div className="full-container" style={pageStyle}>
      <div className='info-container'>
        <div className="name-container">
          <div className="restaurant-name"  style={restaurantImg}>
            <div className="name">Name of the restaurant</div>
            <div className="subname first">₹3000 for two | Location</div><br />
            <div className="subname second">Open from X to Y</div>
          </div>
          <div className="about-restaurant">
            <div className="about">
              About
            </div>
            <div className="about-description">about the restarurant</div>
          </div>
          <div className="rating-reviews">Rating & Reviews</div>
            <i>Average Rating: {calculateAverageRating()}</i>
              <div className="rating-reviews-description">
  <span>Rate the Restaurant: </span>
  <Rating
    value={userRating}
    count={5}
    onChange={handleRatingChange}
    size={40} // Adjust the size as needed
    activeColor="#ffd700"
  />
</div>

<div>
<div className="reviews-list">
<textarea
    rows="4"
    cols="50"
    value={newReview}
    onChange={(e) => setNewReview(e.target.value)}
    placeholder="Write a review..."
    className="review-input"
  />
  <button onClick={handleAddReview} className="add-review-button">Add Review</button>
  {visibleReviewsList.map((review, index) => (
    <div className="review-item" key={index}>
      {/* Display user avatar */}
      <img
        src={userAvatars[review.userId]}
        style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
      />

      {/* Display review content */}
      <div>
      <span style={{marginTop: '20px'}}>Rating: {review.rating} stars</span>
        <div className="reviews-list">{review.text}</div>
      </div>
    </div>
  ))}
</div>
{reviews.length > visibleReviews && (
              <button onClick={handleReadMore} className="read-more-button">
                Read More
              </button>
            )}
</div>
          <div className='about'>Images</div>
          <div>
            <img className="rectangle2"  style={Images}></img>
            <img className="rectangle2"  style={Images}></img>
            <img className="rectangle2"  style={Images}></img>
            <img className="rectangle2"  style={Images}></img>
            <img className="rectangle2"  style={Images}></img>
            <img className="rectangle2"  style={Images}></img>
          </div>
        </div>
        <div className="book-container">
          <div className="input-group1">
            <div className="date-picker-container">
              <DatePicker
                id="dateSelector"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd MMM, yyyy" // Custom date format
                minDate={new Date()}
                placeholderText={'Select a date'}
              // readOnly
              />
            </div>
          </div>
      <div className="input-group text-light">
        <label htmlFor="personSelector">Number of Persons: </label></div>
        <div className="input-group text-light btn-container">
        <div className="btn-row">
          <button onClick={handleDecrement}>-</button>
          <span>{numberOfPersons}</span>
          <button onClick={handleIncrement}>+</button>
          
        </div>
      </div>
      <div className="input-group text-light">
        <label>Select your Slot: </label></div>
          <button className="rectangle">10.00 AM</button>
          <button className="rectangle">11.00 AM</button>
          <button className="rectangle">12.00 AM</button>
          <button className="rectangle">10.00 AM</button>
          <button className="rectangle">02.00 AM</button>
          <button className="rectangle">03.00 AM</button>
          <button className="rectangle">04.00 AM</button>
          <button className="rectangle">05.00 AM</button>
          <button className="rectangle">04.00 AM</button>
          <button className="rectangle">06.00 AM</button>
          <button className="book-table-button">Book Table</button>
        </div>
      </div>
    </div>
  )
}


export default RestaurantOne;

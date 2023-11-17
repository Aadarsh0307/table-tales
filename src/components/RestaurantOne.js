import React, { useState } from 'react';
import "./RestaurantOne.css";
import "./BookTable.js";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import dayjs from 'dayjs';

function RestaurantOne() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handlePersonChange = (event) => {
    setNumberOfPersons(parseInt(event.target.value, 10));
  };

  const [selectedTime, setSelectedTime] = useState('08:00');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const Images = {
    background: `url(${process.env.PUBLIC_URL}/restaurant-info.jpg)`,
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
          <div className="restarurant-image">

          </div>
          <div className="restaurant-name">
            <div className="name">Name of the restaurant</div>
            <p>Location</p>
            <p>open form to form</p>
          </div>
          <div className="about-restaurant">
            <div className="name">
              About
            </div>
            <p>about the restarurant</p>
          </div>
          <div className='name'>Images</div>
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
          <div className="input-group">
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
            <label htmlFor="personSelector">Number of Persons:</label>
            <select id="personSelector" value={numberOfPersons} onChange={handlePersonChange}>
              {[1, 2, 3, 4, 5].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
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
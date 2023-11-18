import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const [username, setUsername] = useState('Your Username');
  const [profilePicture, setProfilePicture] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('youremail@example.com');
  const [recentBookings, setRecentBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm('Are you sure you want to log out?');

    if (isConfirmed) {
    alert('Logging out...');

    navigate('/'); // Redirect to home page after logout
    }
  };

  useEffect(() => {
    // Mock data for demonstration
    const dummyRecentBookings = [
      {
        bookingId: '12345',
        dayBooked: 'Monday',
        dateBooked: '2023-11-20',
        timeBooked: '10:00 AM',
        numSeatsBooked: 2,
      },
      {
        bookingId: '67890',
        dayBooked: 'Wednesday',
        dateBooked: '2023-11-22',
        timeBooked: '02:30 PM',
        numSeatsBooked: 3,
      },
    ];

    const dummyCurrentBooking = {
      bookingId: 'ABCDE',
      dayBooked: 'Friday',
      dateBooked: '2023-11-24',
      timeBooked: '12:15 PM',
      numSeatsBooked: 1,
    };

    setRecentBookings(dummyRecentBookings);
    setCurrentBooking(dummyCurrentBooking);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Make API calls to update the data on the backend with the new values
    // After successful updates, set setIsEditing(false);
    alert('Saving changes...');
    setUsername(newUsername);
    setEmail(newEmail);
    setPhoneNumber(newPhoneNumber);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset the new values and set editing to false
    alert('Canceling changes...');
    setNewUsername(username);
    setNewEmail(email);
    setNewPhoneNumber(phoneNumber);
    setIsEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedProfilePicture(selectedFile);
    setProfilePicture(URL.createObjectURL(selectedFile));
  };

  const handleUpdateBooking = () => {
    // Placeholder for updating the current booking
    alert('Updating the current booking...');
  };

  const handleCancelBooking = () => {
    // Placeholder for canceling the current booking
    alert('Canceling the current booking...');
  };

  const handleEditPhoto = () => {
    // Placeholder for handling the edit photo action
    alert('Editing profile photo...');
  };

  const pageStyle = {
    background: `url(${process.env.PUBLIC_URL}/profile-background.jpg)`,
  };

  return (
    <div className="ProfileContainer" style={pageStyle}>
      <div className="WhiteBackground">
        <h1>Profile View</h1>

        <div className="AvatarUpload">
          <div className="AvatarPreview" onClick={() => document.getElementById('fileInput') && document.getElementById('fileInput').click()}>
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div className="DefaultProfilePicture" />
            )}
          </div>

          {isEditing && (
            <div className="AvatarEdit">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                id="fileInput"
              />
              <label htmlFor="fileInput" onClick={handleEditPhoto}></label>
            </div>
          )}
        </div>

        <div className="UserInfoContainer">
          <p>
            <strong>Username:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="EditInput"
              />
            ) : (
              <span>{username}</span>
            )}
          </p>

          <p>
            <strong>Email:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="EditInput"
              />
            ) : (
              <span>{email}</span>
            )}
          </p>

          <p>
            <strong>Phone Number:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                value={newPhoneNumber}
                onChange={(e) => setNewPhoneNumber(e.target.value)}
                className="EditInput"
              />
            ) : (
              <span>{phoneNumber}</span>
            )}
          </p>
        </div>

        <div className="EditButtonContainer">
          {isEditing && (
            <>
              <button onClick={handleSave} className="SaveButton">
                Save
              </button>
              <button onClick={handleCancel} className="CancelButton">
                Cancel
              </button>
            </>
          )}
        {!isEditing && (
          <>
            <button onClick={handleEdit} className="EditButton">
              Edit Profile
            </button>
          </>
        )}
        </div>

        <h2>Current Booking</h2>
        {currentBooking && (
          <div className="BookingBox">
            <div className="BookingCard">
              <h3>Booking ID: {currentBooking.bookingId}</h3>
              <p><strong>Day Booked:</strong> {currentBooking.dayBooked}</p>
              <p><strong>Date Booked:</strong> {currentBooking.dateBooked}</p>
              <p><strong>Time Booked:</strong> {currentBooking.timeBooked}</p>
              <p><strong>Number of Seats Booked:</strong> {currentBooking.numSeatsBooked}</p>
            </div>
            
            <div className="EditButtonContainer">
              <button onClick={handleUpdateBooking} className="UpdateBookingButton">
                Update Booking
              </button>
              <button onClick={handleCancelBooking} className="CancelBookingButton">
                Cancel Booking
              </button>
            </div>
            
          </div>
        )}
        {!currentBooking && (
          <p className="NoBookingMessage">No current booking.</p>
        )}
        <h2 className="RecentBookingsTitle">Recent Bookings</h2>
        <div className="RecentBookingsList">
          {recentBookings.map((booking) => (
            <div className="BookingBox" key={booking.bookingId}>
              <div className="BookingCard">
                <h3>Booking ID: {booking.bookingId}</h3>
                <p><strong>Day Booked:</strong> {booking.dayBooked}</p>
                <p><strong>Date Booked:</strong> {booking.dateBooked}</p>
                <p><strong>Time Booked:</strong> {booking.timeBooked}</p>
                <p><strong>Number of Seats Booked:</strong> {booking.numSeatsBooked}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="LogoutButtonContainer">
          <button onClick={handleLogout} className="LogoutButton">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

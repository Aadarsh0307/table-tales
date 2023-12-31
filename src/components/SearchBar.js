import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search functionality based on the 'location' state
    // You can use this location to filter restaurant results, for example
    console.log('Searching for:', location);
    navigate('/book-table');
  };

  const searchBarStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#f8f9fa', 
    borderRadius: '8px', 
    fontSize: '16px', 
    border: 'none', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', 
    overflow: 'hidden',
    marginTop: '20px',
  };

  const inputStyle = {
    flex: '1',
    padding: '15px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#ff9900',
    color: '#fff',
    border: 'none',
    borderRadius: '0 8px 8px 0',
    padding: '15px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textShadow: 'rgba(0, 0, 0, 0.9)',
  };

  return (
    <div className="search-bar" style={searchBarStyle}>
      <input
        type="text"
        style={inputStyle}
        placeholder="Search for restaurants by location..."
        value={location}
        onChange={handleLocationChange}
      />
      <button style={buttonStyle} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

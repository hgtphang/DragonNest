import React from 'react';
import SearchBar from '../components/SearchBar'; // Make sure this path is correct
import '../components/Style.css'; 
import { useNavigate } from 'react-router-dom';

function HomePage({ onSearch }) {
  // This function would handle the search logic
  let navigate = useNavigate();
  const handleSearch = (zipCode) => {
    console.log('Search for:', zipCode);
    navigate('/search'); // Navigate to the ListingPage with the search results
  };

  return (
    <div className="homepage">
      <div className="search-container">
        <h1 className="welcome-message">Welcome to Dragon Nest</h1>
        <SearchBar onSearch={handleSearch} placeholder="Enter Zip Code" />
      </div>
    </div>
  );
}

export default HomePage;
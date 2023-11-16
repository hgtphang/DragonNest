import React from 'react';
import SearchBar from '../components/SearchBar'; // Make sure this path is correct
import Footer from '../components/Footer';
import '../components/Style.css'; 

function HomePage({ onSearch }) {
  // This function would handle the search logic
  const handleSearch = (zipCode) => {
    console.log('Search for:', zipCode);
  };

  return (
    <div className="homepage">
      <div className="search-container">
        <h1 className="welcome-message">Welcome to Dragon Nest</h1>
        <SearchBar onSearch={handleSearch} placeholder="Enter Zip Code" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
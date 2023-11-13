import React from 'react';
import NavBar from '../components/NavBar'; // Adjust the import path if necessary
import SearchBar from '../components/SearchBar'; // Make sure this path is correct

function HomePage({ onSearch }) {
  // This function would handle the search logic, which may involve updating app state or redirecting to a results page
  const handleSearch = (zipCode) => {
    // Implementation of how the search should be handled
    console.log('Search for:', zipCode);
    // Redirect to /search or another appropriate route with the search results
  };

  return (
    <div className="homepage">
      
      {/* Central search bar */}
      <div className="search-container">
        <h1>Welcome to Dragon Nest</h1>
        <SearchBar onSearch={handleSearch} placeholder="Enter Zip Code" />
      </div>

      {/* Additional content \*/}

    </div>
  );
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'; // Make sure the path to NavBar is correct
import Listing from '../components/Listing'; // Make sure the path to Listing is correct

function ListingPage() {
  const [listings, setListings] = useState([]); // State to hold the list of properties
  const [loading, setLoading] = useState(true); // State to track the loading status
  const [error, setError] = useState(null); // State to hold any error messages

  // useEffect to run the fetch operation when the component mounts
  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Replace with the actual API call to fetch listings
        const response = await fetch('/api/listings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setListings(data); // Set the listings data to state
      } catch (error) {
        setError(error.message); // If there is an error, set the error state
      } finally {
        setLoading(false); // Set loading to false once the data fetch is complete
      }
    };

    fetchListings();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  // Function to handle when a listing is clicked (e.g., to navigate to a detailed view)
  const handleListingClick = (listingId) => {
    // Your navigation logic here
    console.log('Listing clicked:', listingId);
  };

  // Render the ListingPage component
  return (
    <div className="listing-page">
      {/* Include the NavBar component */}
      <NavBar />

      {/* Conditionally render the content based on loading status and errors */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="listings-container">
          <h1>Search Results</h1>
          {/* Map over the listings and render a Listing component for each one */}
          {listings.map((listing) => (
            <Listing
              key={listing.id}
              {...listing} // This passes all the properties of the listing object as props to the Listing component
              onListingClick={() => handleListingClick(listing.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListingPage;

import React, { useState, useEffect } from 'react';
import ListingDetail from '../components/ListingDetail';
import { useLocation } from 'react-router-dom';

function DetailPage() {
  const [listings, setListing] = useState([]); // State to store listings
  const location = useLocation();

  // A function to parse the query string
  const getIdFromSearch = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('zipcode');
  };

  // Function to fetch listings from the backend
  const fetchListings = async () => {
    const id = getIdFromSearch(); // Get the ID from the URL search parameters
    const idSearch = id ? `?zipcode=${id}` : '';
    try {
      const response = await fetch(`http://localhost:5001/nests/search${idSearch}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setListing(data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  // Effect to fetch listings based on the ID in the URL query
  useEffect(() => {
    fetchListings();
  }, [location]);

  return (
    <div className='detail-page'>
      {listings.map((listing) => (
        <ListingDetail
            key={listing.id}
            imageUrl={listing.imageUrl}
            description={listing.description}
            bedType={`Bed type: ${listing.bedType}`}
            price={listing.price}
            room={listing.room}
            size={`Size: ${listing.size}`}
            contactEmail={listing.contactEmail}
            contactNumber={listing.contactNumber}
          />
      ))}
    </div>
  );
};

export default DetailPage;
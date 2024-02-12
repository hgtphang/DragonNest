import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListingDetail from '../components/ListingDetail';


function DetailPage() {
  const [listing, setListing] = useState([]); // State to store listing
  const { id } = useParams(); // Get the id from URL params
  

  // Function to fetch listings from the backend
  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/nests/listings/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
  
    fetchListingDetails(); // Call fetchListingDetails inside the useEffect callback
  }, [id]);
  
   // Render the DetailPage component
  return (
    <div className='detail-page'>
      {listing ? (
        <ListingDetail
          imageUrl={listing.images} 
          hostName={listing.hostName}
          description={listing.description}
          bedType={listing.bedType}
          price={listing.price}
          room={listing.room}
          size={listing.size}
          contactEmail={listing.contactEmail}
          contactNumber={listing.contactNumber}
        />
      ) : (
        <p>Loading...</p> // Or some loading component
      )}
    </div>
  );
};

export default DetailPage;
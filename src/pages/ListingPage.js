import React from 'react';
import Listing from '../components/Listing';
import mockListings from '../assets/mocklisting'; // Import the listings data

function ListingPage() {
  // Function to handle when a listing is clicked
  const handleListingClick = (listingId) => {
    // Navigation logic, if applicable
    console.log('Listing clicked:', listingId);
  };

  // Render the ListingPage component with static data
  return (
    <div className="listing-page">
      {/* <NavBar /> */}
      <div className="listings-container">
        <h1>Search Results</h1>
        {mockListings.map((listing) => (
          <Listing
            key={listing.id}
            imageUrl={listing.imageUrl}
            title={`Stay with ${listing.hostName}`}
            hostName={`Host: ${listing.hostName}`}
            description={listing.description}
            bedType={listing.bedType}
            price={listing.price}
            id={listing.id}
            onListingClick={() => handleListingClick(listing.id)}
          />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ListingPage;













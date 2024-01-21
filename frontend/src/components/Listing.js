import React from 'react';
import { Link } from 'react-router-dom'
import mockListings from "../assets/mocklisting";
// Import any additional assets or styles here

// The Listing component now accepts additional props for the host's name and bed type.
function Listing({ imageUrl, hostName, description, bedType, onListingClick, title, id }) {
  // Function to handle when a listing is clicked
  const handleClick = () => {
    onListingClick();
  };

  // Render the listing item with additional details.
  return (
    <div className="listing" onClick={handleClick}>
      <img src={imageUrl} alt={`Stay at ${hostName}`} className="listing-image" />
      <div className="listing-details">
        <Link to={`/${id}`}><h2 className="listing-title">{title}</h2></Link>
        <h2 className="listing-host-name">{hostName}</h2>
        <p className="listing-description">{description}</p>
        <p className="listing-bed-type">{bedType}</p>
        {/* Add more details here if needed */}
      </div>
    </div>
  );
}

export default Listing;

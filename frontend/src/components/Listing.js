import React from 'react';
import { Link } from 'react-router-dom'

// The Listing component now accepts additional props for the host's name and bed type.
function Listing({ imageUrl, hostName, description, price, onListingClick, title, id}) {
  // Function to handle when a listing is clicked
  const handleClick = () => {
    onListingClick();
  };

  // Render the listing item with additional details.
  return (
    <div className="listing" onClick={handleClick}>
      <img src={imageUrl} alt={`Listing titled ${title}`} className="listing-image" />
      <div className="listing-details">
        <Link to={`/listings/${id}`}><h2>{title}</h2></Link>
        <h2>{hostName}</h2>
        <p>{description}</p>  
        <p>${price}</p>
    
      </div>
    </div>
  );
}

export default Listing;

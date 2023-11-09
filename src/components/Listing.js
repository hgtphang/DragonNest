import React from 'react';
// Import any additional assets or styles here

// The Listing component accepts several props that represent the details of a property.
// These props should match the structure of the data you are passing to this component.
function Listing({ title, imageUrl, description, price, bedrooms, bathrooms, onListingClick }) {
  // This function is called when a listing is clicked.
  // 'onListingClick' would be a function passed as a prop that likely changes the app's current view to show the detailed view of the listing.
  const handleClick = () => {
    onListingClick();
  };

  // Render the listing item.
  // The onClick handler is set to 'handleClick' to allow the listing to be clickable.
  return (
    <div className="listing" onClick={handleClick}>
      <img src={imageUrl} alt={`Listing: ${title}`} className="listing-image" />
      <div className="listing-details">
        <h2 className="listing-title">{title}</h2>
        <p className="listing-description">{description}</p>
        <p className="listing-price">Price: {price}</p>
        <p className="listing-info">Bedrooms: {bedrooms} | Bathrooms: {bathrooms}</p>
      </div>
    </div>
  );
}

export default Listing;
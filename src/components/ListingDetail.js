import React from 'react';
import { useParams } from 'react-router-dom';
import mockListings from '../assets/mocklisting'; // Import the mockListings data

const ListingDetail = () => {
  const { id } = useParams();
  if (!id) {
    return <div>No ID provided</div>;
  }
  const listing = mockListings.find((item) => item.id === parseInt(id, 10));

  if (!listing) {
    return <div>{`Listing with ID ${id} not found`}</div>;
  }

  return (
    <div>
      <img src={listing.imageUrl} alt={listing.title} />
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      <p>Hosted by: {listing.hostName}</p>
      <p>Bed Type: {listing.bedType}</p>
      <p>Price: {listing.price}</p>
      {/* Add other listing details as needed */}
    </div>
  );
};

export default ListingDetail;
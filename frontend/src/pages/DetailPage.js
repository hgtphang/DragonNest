import React from 'react';
import mockListings from '../assets/mocklisting'; // Import the mockListings data
import ListingDetail from '../components/ListingDetail';

const DetailPage = () => {
  const url = window.location.href;
  const parts = url.split("/");
  const id = parts[3];

  const listing = mockListings.find((item) => item.id === parseInt(id, 10));

  if (!listing) {
    return <div>{'Listing with ID ${id} not found'}</div>;
  }

  return (
    <div className='detail-page'>
        <ListingDetail
            key={listing.id}
            imageUrl={listing.imageUrl}
            description={listing.description}
            bedType={`Bed type: ${listing.bedType}`}
            price={listing.price}
            id={listing.id}
            room={listing.room}
            size={`Size: ${listing.size}`}
            contactEmail={listing.contactEmail}
            contactNumber={listing.contactNumber}
          />
    </div>
  );
};

export default DetailPage;
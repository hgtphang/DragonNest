import React from 'react';

// Import any additional assets or styles here

function ListingDetail({ imageUrl, hostName, description, bedType, price, room, size, contactEmail, contactNumber }) {
  return (
    <div className="detail-container">
        <div className="listing-details">
            <img src={imageUrl} alt={`Image`} className="listing-image" />
            <p className='detail-hostname'>{hostName}</p>
            <p className='detail-description'>{description}</p>
            <p className='detail-price'>${price}/month</p>
            <p className='detail-bed'>{bedType}</p>
            {room && <p className='detail-room'>{room}</p>}
            <p className='detail-size'>{size}</p>
            <h2 className="contact-header">Contact Information:</h2>
            <p className='detail-contact'>{contactEmail}</p>
            <p className='detail-contact'>{contactNumber}</p>
            {/* Add more details here if needed */}
        </div>
    </div>
  );
}

export default ListingDetail;
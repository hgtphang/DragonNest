import React from 'react';

// Import any additional assets or styles here

function ListingDetail({ images, hostName, description, bedType, price, room, size, contactEmail, contactNumber }) {
  return (
    <div className="detail-container">
        <div className="image-gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="listing-image" onError={(e) => e.target.src = 'fallbackImageUrl'} />
            ))}
        </div>
        <div className="listing-details">
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
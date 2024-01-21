import React from 'react';
import { Link } from 'react-router-dom'
import mockListings from "../assets/mocklisting";
// Import any additional assets or styles here

function ListingDetail({ imageUrl, hostName, description, bedType, price, room, size, contactEmail, contactNumber}) {

  return (
    <div className="detail-container" >
        <div className="image-arrange">
        <img src={imageUrl} alt={`Stay at ${hostName}`} className="listing-image" />
        <img src={imageUrl} alt={`Stay at ${hostName}`} className="listing-image" />
        <img src={imageUrl} alt={`Stay at ${hostName}`} className="listing-image" />
        <img src={imageUrl} alt={`Stay at ${hostName}`} className="listing-image" />
        </div>
        <div>
            <p className='detail-hostname'>{hostName}</p>
            <p className='detail-description'>{description}</p>
            <p className='detail-price'> {price}</p>
            <p className='detail-bed' >{bedType}</p>
            <p className='detail-room'> {room}</p>
            <p className='detail-size'> {size}</p>

            <h2 className="contact-header">Contact Information:</h2>
            <p className='detail-contact'>{contactEmail}</p>
            <p className='detail-contact'>{contactNumber}</p>
            {/* Add more details here if needed */}
        </div>
    </div>

    //     <div>
    //   <h2>{detailData.title}</h2> {/* Display the title of the listing */}
    //   <p>{detailData.description}</p> {/* Display the description of the listing */}
      
    //   {/* Display other relevant details of the listing */}
    //   <img src={detailData.imageUrl} alt={detailData.title} />
    //   <span>Price: {detailData.price}</span>
    //   <span>Bedrooms: {detailData.bedrooms}</span>
    //   <span>Bathrooms: {detailData.bathrooms}</span>
    //   <span>Pets Allowed: {detailData.petsAllowed ? 'Yes' : 'No'}</span>
      
    //   {/* Contact information section */}
    //   <div>
    //     <h3>Contact Information:</h3>
    //     <p>{detailData.contactName}</p>
    //     <p>{detailData.contactEmail}</p>
    //     {/* If available, add more contact details like phone number here */}
    //   </div>
  );
}

export default ListingDetail;
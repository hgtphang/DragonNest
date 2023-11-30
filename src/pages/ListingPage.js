// import React, { useState, useEffect } from 'react';
import React from 'react';
import NavBar from '../components/NavBar';
import Listing from '../components/Listing'; 
import room1 from '../assets/room1.jpeg';
import room2 from '../assets/room2.jpeg';
import room3 from '../assets/room3.jpeg';
import room4 from '../assets/room4.jpeg';
import Footer from '../components/Footer';
import '../components/Style.css'; 

const mockListings = [
  {
    id: 1,
    imageUrl: room1,
    hostName: 'Hung',
    title: 'Hung Phang',
    description: 'Enjoy a bright and comfortable studio in downtown.',
    bedType: 'Queen bed',
    price: '$670 month'
    // ... other listing properties
  },
  {
    id: 2,
    imageUrl: room2,
    hostName: 'Huy',
    title: 'Duc Dang',
    description: 'Spacious two-bedroom with great city views.',
    bedType: 'Double bed',
    price: '$788 month'
    // ... other listing properties
  },
  {
    id: 3,
    imageUrl: room3,
    hostName: 'Superman',
    title: 'Superman',
    description: 'Spacious two-bedroom with great city views.',
    bedType: 'Two double beds',
    price: '$788 month'
    // ... other listing properties
  },

  {
    id: 4,
    imageUrl: room4,
    hostName: 'Wendy',
    title: 'Wendy Nguyen',
    description: 'Two Comfortable and cosy bedrooms; Near the Center City',
    bedType: 'Queen bed',
    price: '$800 month'
    // ... other listing properties
  },
  // ... more mock listings
];

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
            onListingClick={() => handleListingClick(listing.id)}
          />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ListingPage;












// function ListingPage() {
//   const [listings, setListings] = useState([]); // State to hold the list of properties
//   const [loading, setLoading] = useState(true); // State to track the loading status
//   const [error, setError] = useState(null); // State to hold any error messages

//   // useEffect to run the fetch operation when the component mounts
//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         // Replace with the actual API call to fetch listings
//         const response = await fetch('/api/listings');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setListings(data); // Set the listings data to state
//       } catch (error) {
//         setError(error.message); // If there is an error, set the error state
//       } finally {
//         setLoading(false); // Set loading to false once the data fetch is complete
//       }
//     };
//     fetchListings();
//   }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

//   // Function to handle when a listing is clicked (e.g., to navigate to a detailed view)
//   const handleListingClick = (listingId) => {
//     // Your navigation logic here
//     console.log('Listing clicked:', listingId);
//   };
//   // Render the ListingPage component
//   return (
//     <div className="listing-page">
//       {/* Include the NavBar component */}
//       <NavBar />

//       {/* Conditionally render the content based on loading status and errors */}
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <div className="listings-container">
//           <h1>Search Results</h1>
//           {/* Map over the listings and render a Listing component for each one */}
//           {listings.map((listing) => (
//             <Listing
//               key={listing.id}
//               {...listing} // This passes all the properties of the listing object as props to the Listing component
//               onListingClick={() => handleListingClick(listing.id)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// export default ListingPage;

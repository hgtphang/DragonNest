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












<<<<<<< HEAD
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
=======
>>>>>>> origin/main

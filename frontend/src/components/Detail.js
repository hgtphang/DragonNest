import React, { useState, useEffect } from 'react';
// Additional imports may go here (e.g., components, styles, utilities)

// Detail component for displaying the full details of a listing.
// It expects an 'id' prop which should be the unique identifier for a listing.
function Detail({ id }) {
  // State 'detailData' holds the detailed information about the listing.
  // Initially, it's set to null indicating that no data has been fetched yet.
  const [detailData, setDetailData] = useState(null);
  
  // State 'error' is used to store any error messages if the data fetch fails.
  const [error, setError] = useState(null);

  // The useEffect hook fetches the detailed listing data when the component mounts
  // or when the listing 'id' changes.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // The API endpoint to fetch details should be replaced with the actual endpoint.
        // This should return details for a single listing based on the 'id' provided.
        const response = await fetch(`/api/listings/${id}`);
        if (!response.ok) {
          throw new Error('Data could not be fetched');
        } else {
          const data = await response.json();
          setDetailData(data); // Update the state with the fetched data
        }
      } catch (err) {
        setError(err.message); // If there is an error, set the error state
      }
    };

    fetchData(); // Call the fetchData function to trigger data fetching
  }, [id]); // The dependency array contains 'id' to refetch when it changes

  // Conditional rendering for error state
  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching data fails
  }

  // Conditional rendering for loading state
  if (!detailData) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  // Render the detailed information of the listing using the fetched 'detailData'.
  // This section should be replaced with the actual markup based on your application's design.
  return (
    <div>
      <h2>{detailData.title}</h2> {/* Display the title of the listing */}
      <p>{detailData.description}</p> {/* Display the description of the listing */}
      
      {/* Display other relevant details of the listing */}
      <img src={detailData.imageUrl} alt={detailData.title} />
      <span>Price: {detailData.price}</span>
      <span>Bedrooms: {detailData.bedrooms}</span>
      <span>Bathrooms: {detailData.bathrooms}</span>
      <span>Pets Allowed: {detailData.petsAllowed ? 'Yes' : 'No'}</span>
      
      {/* Contact information section */}
      <div>
        <h3>Contact Information:</h3>
        <p>{detailData.contactName}</p>
        <p>{detailData.contactEmail}</p>
        {/* If available, add more contact details like phone number here */}
      </div>
    </div>
  );
}

export default Detail; // Export the Detail component for use in other parts of the app

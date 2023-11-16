import React, { useState } from 'react';

// The SearchBar functional component accepts a prop 'onSearch' which is a function 
// that will be called when the search is submitted.
function SearchBar({ onSearch }) {
  // 'searchTerm' state is initialized to an empty string and will hold the current value of the search input.
  // 'setSearchTerm' is a function that will be used to update 'searchTerm'.
  const [searchTerm, setSearchTerm] = useState('');

  // 'handleInputChange' is a function that is called every time the user types in the input field.
  // It updates the 'searchTerm' state with the current value of the input field.
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 'handleSubmit' is a function that is called when the form is submitted.
  // It prevents the default form submission behavior and calls the 'onSearch' prop
  // with the current 'searchTerm' as its argument.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action which refreshes the page.
    onSearch(searchTerm); // Calls the onSearch function passed as a prop from the parent component.
  };

    // Style object for the container
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Changed to 'flex-start'
      paddingTop: '30vh', // Adds padding at the top to move the search bar up
      height: '100vh',
      width: '100vw'
    };
  
    // Style object for the form
    const formStyle = {
      display: 'flex', // Enables flexbox layout
      flexDirection: 'column', // Stacks children vertically
      alignItems: 'center', // Centers children horizontally in the form
      width: '100%'
    };
    const inputStyle = {
      width: '40%', // Set the width of the input field to 80%
      margin: '10px 0', // Adds margin to the input for spacing
      height:'50px'
    };
  

  // The component returns a form element with an input field and a submit button.
  // The form has an 'onSubmit' event listener that calls 'handleSubmit' when the form is submitted.
  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Enter Zip code"
          value={searchTerm}
          onChange={handleInputChange}
          style={inputStyle} // Adds margin to the input for spacing
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar; // Exports the SearchBar component for use in other parts of the application.

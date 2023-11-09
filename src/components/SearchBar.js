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

  // The component returns a form element with an input field and a submit button.
  // The form has an 'onSubmit' event listener that calls 'handleSubmit' when the form is submitted.
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" // Defines the input type as text.
        placeholder="Enter details (e.g., price, bathrooms, bedrooms, pets)" // Placeholder text is shown when the input field is empty.
        value={searchTerm} // The value of the input is controlled by the component's state (searchTerm).
        onChange={handleInputChange} // 'onChange' event listener is set to 'handleInputChange' to update the state as the user types.
      />
      <button type="submit">Search</button> 
    </form>
  );
}

export default SearchBar; // Exports the SearchBar component for use in other parts of the application.

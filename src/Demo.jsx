import React, { useState } from 'react';

const MyForm = () => {
  const [editable, setEditable] = useState(true);
  const [formData, setFormData] = useState({
    name: 'John Doe', // Initial value for the name
    email: 'john@example.com', // Initial value for the email
    // Add other initial values for form fields here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (editable) {
      // Allow form changes only when editable is true
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          disabled={!editable} // Disable input if editable is false
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={!editable} // Disable input if editable is false
        />
      </label>
      <br />

      {/* Add other form fields here */}

      <button type="submit" disabled={!editable}>
        Submit
      </button>

      <button type="button" onClick={() => setEditable(!editable)}>
        Toggle Editable
      </button>
    </form>
  );
};

export default MyForm;
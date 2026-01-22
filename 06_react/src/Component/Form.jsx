import React, { useState } from "react";

function PhoneBook() {
  const [formData, setFormData] = useState({
    firstName: "Coder",
    lastName: "Byte",
    phone: "8885559999"
  });

  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedContacts = [...contacts, formData].sort(
      (a, b) => a.lastName.localeCompare(b.lastName)
    );

    setContacts(updatedContacts);

    setFormData({
      firstName: "",
      lastName: "",
      phone: ""
    });
  };

  return (
    <div>
      <h2>Phone Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.lastName}, {contact.firstName} — {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneBook;

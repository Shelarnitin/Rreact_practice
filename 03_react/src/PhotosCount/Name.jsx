import React, { useState } from "react";

const Name = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
    setFullName("");
  }

  return (
    <div>
      <h2>Name Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
};

export default Name;

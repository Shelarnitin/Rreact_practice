import React, { useState } from 'react'

export default function Birthday() {
    const [guestName, setGuestName] = useState('');

    const updateGuestName = (event) => setGuestName(event.target.value);

  return (
    <div>
        <h1>Virtual Birthday Party</h1>
        <input 
        type="text"
        placeholder='Enter Your Name Here'
        value={guestName}
        onChange={updateGuestName}
        />

        <p>Hi {guestName}, thank You.</p>
    </div>
  )
}

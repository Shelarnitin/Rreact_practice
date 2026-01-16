import React, { useState } from 'react'

function Controlled() {
    const [name, setName] = useState('');

    function handleSubmit (e){
        e.preventDefault();
        alert(name)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Controlled
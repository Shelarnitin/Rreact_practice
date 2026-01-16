import React, { useRef } from 'react'

function UnControlled() {
    const inputRef = useRef();

    function handleSubmit (e) {
        e.preventDefault();
        alert(inputRef.current.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter Your Name' type="text" ref={inputRef}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UnControlled
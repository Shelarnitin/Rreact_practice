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
        <input type="text" ref={inputRef}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UnControlled
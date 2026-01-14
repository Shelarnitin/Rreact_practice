import React, { useRef, useState } from 'react'

function Greeting() {
  const nameRef = useRef(null)
  const [name, setName] = useState("")


  function showName () {
    setName(nameRef.current.value)
  }
  return (
    <div>
      <h1>hello, {name}</h1>
      <input ref={nameRef} type="text" />
      <button onClick={showName}>Greet</button>
    </div>
  )
}

export default Greeting
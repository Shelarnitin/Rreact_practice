import React, { useRef, useState } from "react";

function Greet() {
  const nameRef = useRef(null)
  const [name, setName] = useState("")


  function showName () {
    setName(nameRef.current.value)
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <input type="text" ref={nameRef} />
      <button onClick={showName}>Greet</button>
    </>
  )
}

export default Greet
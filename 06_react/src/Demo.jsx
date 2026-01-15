import React, { useRef, useState } from "react";

function Greeting () {
  const nameRef = useRef(null)
  const [name, setName] = useState("")


  function showName () {
    setName(nameRef.current.value)
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <input ref={nameRef} type="text" />
      <button onClick={showName}>Greet</button>
    </>
  )
}
export default Greeting;
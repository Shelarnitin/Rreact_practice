import React, { useRef, useState } from 'react'
import UnControlled from './Component/UnControlled'
import Controlled from './Component/Controlled'

function Greeting() {
  const nameRef = useRef(null)
  const [name, setName] = useState("")


  function showName () {
    setName(nameRef.current.value)
  }
  return (
    <div>
      <h1>hello, {name}</h1>
      <input placeholder='Enter Your Name' ref={nameRef} type="text" />
      <button onClick={showName}>Greet</button> <hr />
      <UnControlled/> <hr />
      <Controlled/> 
    </div>
  )
}

export default Greeting
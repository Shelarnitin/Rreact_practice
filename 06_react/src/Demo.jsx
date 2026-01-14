import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Greeting = () => {
    const nameRef = useRef(null)
    const[name, setName] = useState("")

    const showName = () => {
        setName(nameRef.current.value)
    }
  return (
    <div>
        <h1>Welcome, {name}</h1>
        <input ref={nameRef} type="text" />
        <button onClick={showName}>Greet</button>
    </div>
  )
}

export default Greeting
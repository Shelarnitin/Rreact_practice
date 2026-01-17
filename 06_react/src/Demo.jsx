import { useState } from "react";

function NumberArray () {
  const [ name, setName] = useState([1,2,3])

  const addNumber = () => {
    setName([...name,4])
  }

  return(
    <>
      <h1>Numbers: {name.join(', ')}</h1>
      <button onClick={addNumber}>Add 4</button>
    </>
  )
}

export default NumberArray
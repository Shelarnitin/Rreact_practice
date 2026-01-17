// const { useState } = require("react");
import { useState } from "react"
// import React {useState} from "react"

function PerformOnNumbers () {
  const [number, setNumber] = useState([1,2,3,4])

  const RemoveFour = () => {
    const updateArray = number.filter(num => num !==4)
    setNumber(updateArray)
  }

  const AddFour = () => {
    if(!number.includes(4)){
      setNumber([...number, 4])
    }
  }

  return(
    <>
      <h1>Numbers : {number.join(', ')}</h1>
      <button onClick={RemoveFour}>Remove</button>
      <button onClick={AddFour}>Add</button>
    </>
  )
}

export default PerformOnNumbers
// const { useState } "react";
import { useState } from "react"
import  Counter  from './Counter.jsx'
import Twice from "./Twice.jsx"


function App () {
  const [ count, setCount] = useState(0)

  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onMouseOver={() => setCount ((count) => count + 1)}>Increment</button>
      <Counter/> <hr />
      <Twice/>
    </div>
  )
}

export default App
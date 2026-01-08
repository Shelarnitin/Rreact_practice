// const { useState } "react";
import { useState } from "react"
import  Counter  from './Counter.jsx'


function App () {
  const [ count, setCount] = useState(0)

  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onMouseOver={() => setCount ((count) => count + 1)}>Increment</button>
      <Counter/>
    </div>
  )
}

export default App
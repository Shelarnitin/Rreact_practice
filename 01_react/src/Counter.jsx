// const { useState } "react";
import { useState } from "react"


export default function Counter () {
  const [ count, setCount] = useState(0)

  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onMouseOver={() => setCount ((count) => count - 1)}>Decrement</button>
    </div>
  )
}

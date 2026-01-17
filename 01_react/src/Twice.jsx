import React from "react";
import { useState } from "react";

function Twice () {
    const [count, setCount] = useState(0)

    const IncrementTwice = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={IncrementTwice}>Incrementtwice</button>
        </div>
    )
}
export default Twice
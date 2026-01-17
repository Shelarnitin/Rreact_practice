import React from "react";
import { useState } from "react";

function PerformOnThree () {
    const [number, setNumber] = useState([1,2,3])

    const ToggleThree = () => {
        if(number.includes(3)){
            setNumber(number.filter(num => num !== 3))
        } else {
            setNumber([...number, 3])
        }
    }

    return(
        <div>
            <h1>Numbers : {number.join(', ')}</h1>
            <button onClick={ToggleThree}>Toggle 3</button>
        </div>
    )
}

export default PerformOnThree
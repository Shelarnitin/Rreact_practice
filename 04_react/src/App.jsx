import React, {useState, useEffect} from "react";

function CounterApp() {
  const [counter, setCounter] = useState(0)

  useEffect (() => {
    console.log(`counter Value : ${counter}`);
  },[counter]);

  const IT = () => {
    setCounter(x => x +1)
    setCounter(x => x +1)
    
  }
  
  return(
    <div>
      <p>Counter : ${counter}</p>
      <button onClick={IT}>Add Count</button>
    </div>
  )
}

export default CounterApp;
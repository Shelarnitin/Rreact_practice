import React, {useState, useEffect} from "react";
import MyComponent from './Async/Async.jsx'
import PhotoCounter from './Photo/PhotoCounter.jsx'

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
      <button onClick={IT}>Add Count</button> <hr />
      <MyComponent/> <hr />
      <PhotoCounter/>
    </div>
  )
}

export default CounterApp;
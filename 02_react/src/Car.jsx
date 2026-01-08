// import { useState } from "react";

// export default function CarControl () {
//   const [status , setStatus] = useState('stop')

//   const carStart = () => {
//     setStatus(prevStatus => prevStatus === 'stop' ? 'Starting' : prevStatus)
//   }

//   return (
//     <>
//       <h1>Car Status : {status}</h1>
//       <button onClick={carStart}>Start</button>
//     </>
//   )
// }

import { useState } from "react";

export default function CarControl () {
    const [ status, setStatus] = useState('stop');

    const carStart = () => {
        setStatus(prevStatus => prevStatus === 'stop' ? 'starting' : prevStatus)
    }

    return (
        <>
            <h1>Car Status : {status}</h1>
            <button onClick={carStart}>start</button>
        </>
    )
}
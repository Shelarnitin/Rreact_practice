import { useState } from "react";
import CarControl from "./Car";

function SpaceShipControl () {
  const [status , setStatus] = useState('stop')

  const launchSequence = () => {
    setStatus(prevStatus => prevStatus === 'stop' ? 'Launched' : prevStatus)
  }

  return (
    <>
      <h1>Spaceship Status : {status}</h1>
      <button onClick={launchSequence}>launch</button>
      <CarControl/>
    </>
  )
}

export default SpaceShipControl
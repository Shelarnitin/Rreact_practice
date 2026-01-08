import { useState } from "react";

function SpaceShipControl () {
  const [status , setStatus] = useState('stop')

  const launchSequence = () => {
    setStatus(prevStatus => prevStatus === 'stop' ? 'Launched' : prevStatus)
  }

  return (
    <>
      <h1>Spaceship Status : {status}</h1>
      <button onClick={launchSequence}>launch</button>
    </>
  )
}

export default SpaceShipControl
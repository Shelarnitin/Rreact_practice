import { useState } from "react";

function SpaceShip () {
  const [fuel, setFuel] = useState(5);

  const burnFuel = () => {
    setFuel(prevFuel => (prevFuel > 0 ? prevFuel -1 : 0))
  }

  if(fuel < 2){
    alert("Low Fuel...!")
  }

  return (
    <>
      <h1>Fuel Level : {fuel}</h1>
      <button onClick={burnFuel}>bure Fuel</button>
    </>
  )
}

export default SpaceShip;
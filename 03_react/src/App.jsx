import { useState } from "react";
import BooksList from './Books.jsx'
import { useEffect } from "react";
import PhotoCount from "./PhotosCount/PhotoCount.jsx";
import Shopping from "./PhotosCount/Shopping.jsx";
import Name from "./PhotosCount/Name.jsx";

function SpaceShip () {
  const [fuel, setFuel] = useState(5);

  const burnFuel = () => {
    setFuel(prevFuel => (prevFuel > 0 ? prevFuel -1 : 0))
  }

  useEffect(() => {
    if (fuel < 2) {
      alert("Low Fuel...!");
    }
    if (fuel == 0){
      alert("Fuel Over")
    }
  }, [fuel]);

  return (
    <>
      <h1>Fuel Level : {fuel}</h1>
      <button onClick={burnFuel}>bure Fuel</button>
      <BooksList/> <hr />
      <PhotoCount/>  <hr />
      <Shopping/> <hr />
      <Name/>
    </>
  )
}

export default SpaceShip;
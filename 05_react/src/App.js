import './App.css';
import { useEffect, useState } from 'react';

function ControlPanel({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]);

  return (
    <div>
      <h3>Fuel Level: {fuelLevel}</h3>
    </div>
  );
}

function App() {
  const [fuelLevel, setFuelLevel] = useState(100);

  const decreaseFuel = () => {
    setFuelLevel(prevFuel => prevFuel > 10 ? prevFuel - 10 : "fuel is empty");
  };

  return (
    <div className="App">
      <ControlPanel fuelLevel={fuelLevel} />
      <ControlPanel fuelLevel={fuelLevel} />

      <button onClick={decreaseFuel}>Decrease Fuel</button>
    </div>
  );
}

export default App;

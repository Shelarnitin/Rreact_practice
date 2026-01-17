import React, { useState } from 'react';


// function RemoveNumber() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4]);

//   const removeThree = () => {
//     const updatedArray = numbers.filter(num => num !== 3);
//     setNumbers(updatedArray);
//   };

//   return (
//     <div>
//       <h2>Numbers: {numbers.join(', ')}</h2>
//       <button onClick={removeThree}>Remove 3</button>
//     </div>
//   );
// }

// export default RemoveNumber;

function removeNumber () {
  const [number, setNumbers] = useState([1,2,3,4])


  const removeThree = () => {
    const updateArray = number.filter(num => num !== 3)
    setNumbers(updateArray)
  }

  const addThree = () => {
    // const updateArray = number.filter > 2 ? num => num ===3 : number
    setNumbers([...number,3])
  }

  return(
    <>
      <p>Numbers : {number.join(', ')}</p>
      <button onClick={removeThree}>Remove</button>
      <button onClick={addThree}>Add</button>
    </>
  )
}

export default removeNumber

import React, { useState } from "react";

const GroceryForm = () => {
    const [itemCount, setItemCount] = useState(1);


    function addItem () {
        setItemCount(prevItem => prevItem + 1)
    }

    function removeItem () {
        setItemCount(prevItem => prevItem > 1 ? prevItem - 1 : "All item is being removed")
    }

    return (
        <>
            <h3>Total Items : {itemCount}</h3>
            <button onClick={addItem}>Add item</button>
            <button onClick={removeItem}>Remove item</button>
        </>
    )
}

export default GroceryForm
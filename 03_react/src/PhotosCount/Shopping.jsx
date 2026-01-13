import React, { useState } from 'react'

const Shopping = () => {
  const [shoppingCart, setShoppingCart] = useState([
    { name: "Apple", quantity: 3, price: 0.5 },
    { name: "Orange", quantity: 5, price: 0.75 }
  ])

  const [itemName, setItemName] = useState("")
  const [itemQuantity, setItemQuantity] = useState("")
  const [itemPrice, setItemPrice] = useState("")

  function addItem(e) {
    e.preventDefault()

    setShoppingCart([
      ...shoppingCart,
      {
        name: itemName,
        quantity: Number(itemQuantity),
        price: Number(itemPrice)
      }
    ])

    // Reset inputs
    setItemName("")
    setItemQuantity("")
    setItemPrice("")
  }

  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {shoppingCart.map((item, index) => (
          <li key={index}>
            {item.name} - Qty: {item.quantity} - Price: ${item.price}
          </li>
        ))}
      </ul>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          required
        />

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          required
        />

        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default Shopping

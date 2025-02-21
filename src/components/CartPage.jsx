// CartPage.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from './features/cartSlice'

const CartPage = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.items.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <img src={item.img} width="80vw" alt="" />
            <h2 className="text-xl">{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </div>
          <button
            className="bg-red-500 text-white py-1 px-4 rounded-full"
            onClick={() => dispatch(removeItem(item))}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right mt-4">
        <h2 className="text-xl font-bold">Total: ${cart.total.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default CartPage

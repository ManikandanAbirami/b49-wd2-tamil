import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './counterSlice'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);
  const cart = useSelector(state => state.cart);

  return (
    <>
    <p>Count: {count}</p>
    <p>Cart: {cart}</p>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default App

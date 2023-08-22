import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Robot from './Robot'
import PreviousValue from './PreviousValue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreviousValue/>
    </>
  )
}

export default App

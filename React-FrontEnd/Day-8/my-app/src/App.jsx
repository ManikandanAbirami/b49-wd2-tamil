import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalSound from './AnimalSound'
import { AnimalProvider } from './AnimalContext'
import ChangeSound from './ChangeSound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AnimalProvider>
      <div>
        <h1>Animal sound App</h1>
        <AnimalSound/>
        <ChangeSound/>
      </div>
    </AnimalProvider>
  )
}

export default App

import React, { useContext } from 'react'
import { AnimalContext } from './AnimalContext'

function AnimalSound() {
    const { animalSound } = useContext(AnimalContext);
    const { age } = useContext(AnimalContext);
  return (
    <div>The animal sound is: {animalSound}
    <p>Animal Age is: {age}</p>
    </div>
  )
}

export default AnimalSound
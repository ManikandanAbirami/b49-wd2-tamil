import React, { useContext } from 'react'
import { AnimalContext } from './AnimalContext'

function ChangeSound() {
    const { setAnimalSound } = useContext(AnimalContext);
    const { setAge } = useContext(AnimalContext);

    const changeSound = (newSound) => {
        setAnimalSound(newSound);
    }
    const changeAge = (newAge) => {
        setAge(newAge);
    }
  return (
    <>
    <button onClick={() => changeSound('woof')}>Change sound to woof</button>
    
    <button onClick={() => changeAge('23')}>Change age</button>
    </>
  )
}

export default ChangeSound
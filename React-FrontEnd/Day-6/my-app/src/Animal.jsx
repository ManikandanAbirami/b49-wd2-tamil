import React from 'react'
import { useParams } from 'react-router-dom'

function Animal() {
    const { name } = useParams(); // Get the URL param "name"

    const animalInfo = {
        dog: "Dogs are friendly and loyal.",
        cat: "Cats are independent and playful.",
        rabbit: "Rabbits are cute and fluffy."
    };

    const info = animalInfo[name] || "Animal not found";
  return (
    <div>
        <h2>
            {/* {name.charAt(0).toUpperCase() + name.slice(1)} */}
            {name}
        </h2>
        <p>{info}</p>
    </div>
  )
}

export default Animal
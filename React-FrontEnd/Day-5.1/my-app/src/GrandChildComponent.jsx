import React from 'react'

function GrandChildComponent(props) {
  return (
    <div>
        <h3>GrandChild Component</h3>
        {/* <p>Names from Parent: {props.names.join(', ')}</p> */}
        <ul>
            {props.names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default GrandChildComponent
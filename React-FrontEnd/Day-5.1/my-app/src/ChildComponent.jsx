import React from 'react'
import GrandChildComponent from './GrandChildComponent'

function ChildComponent(props) {
  const sendDataToParent = () => {
    const data = "Hello from child!!!";
    props.onDataFromChild(data);
  }
  return (
    <div>
        <h2>Child Component</h2>
        {/* <ul>
            {props.names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul> */}
        <button onClick={sendDataToParent}>Send Data to Parent!!!</button>
        <GrandChildComponent names={props.names}></GrandChildComponent>
    </div>
  )
}

export default ChildComponent
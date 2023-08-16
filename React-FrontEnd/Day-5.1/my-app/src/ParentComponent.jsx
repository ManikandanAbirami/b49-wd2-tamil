import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
const [receivedData, setReceivedData] = useState("");

//callback function to receive data from Child!!
const handleDataFromChild = (data) => {
    setReceivedData(data);
}
const names = ['Alice', 'Barbie', 'Charlie', 'John'];
  return (
    <div>
        <h1>List of Names</h1>
        <p>Data from child: {receivedData}</p>
        <ChildComponent onDataFromChild={handleDataFromChild} 
        names={names}></ChildComponent>
    </div>
  )
}

export default ParentComponent
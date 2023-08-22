import React, { useRef } from 'react'

function PreviousValue() {
    const currentValue = useRef(0);
    const previousValue = useRef(0);
    const inputRef = useRef(null);
    const handleIncrement = () => {
        inputRef.current.focus();
     previousValue.current = currentValue.current;
     currentValue.current += 1;
     console.log('Current Value:', currentValue.current);   
     console.log('Previous Value:', previousValue.current);
    }
  return (
    <div>
        <p>Current Value: {currentValue.current}</p>
        <p>Previous Value: {previousValue.current}</p>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default PreviousValue
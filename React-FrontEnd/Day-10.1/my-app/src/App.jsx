import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './SignupForm';

function App() {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const [val, setVal] = useState(0);

  const [person, setPerson] = useState({
    name: '',
    age: 0,
    address: {
      street: '',
      city: '',
      state: '',
      pincode: ''
    }
  });

  useEffect(() => {
    count.current = count.current + 1;
    //setVal(val+1);
  });

  return (
    <>
      <SignupForm/>
    </>
  )
}

export default App

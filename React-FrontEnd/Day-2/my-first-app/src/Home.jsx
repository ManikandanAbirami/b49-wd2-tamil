// eslint-disable-next-line no-unused-vars
import React from 'react'

function Home(props) {
  let x = 1;
  let y = 2;
  // let courseName = "ReactJS";
  // let obj = {name: "Manikandan", age: 32}
  function saveClick() {
    alert("Save clicked!!");
  };
  return (
    <div>
    {/* <span>Learning with {obj.name} is so much fun!!!</span><br></br> */}
    <span>Learning with {props.name} is so much fun!!!</span><br></br>
    {console.log("Just for checking!!!!")}
    <label htmlFor="name">Name: </label>
    <input id="name" type='text' placeholder='Type Here' defaultValue={x+y}></input>
    <button onClick={saveClick}>Save</button>
    </div>
  )
}

export default Home
import React, { useState } from 'react'

function Home(props) {
    // const myListData = [
    //     {id:1, name:"Item-1"},
    //     {id:2, name:"Item-2"},
    //     {id:3, name:"Item-3"},
    //     {id:4, name:"Item-4"}
    // ];
    const [isClicked, setIsClicked] = useState(true);
    const [myListData, setMyListData] =  useState([
            {id:1, name:"Item-1"},
            {id:2, name:"Item-2"},
            {id:3, name:"Item-3"},
            {id:4, name:"Item-4"}
        ]);
    const handleRemove = (itemId) => {
        const updatedMyListData = myListData.filter((item) => item.id != itemId);
        console.log(updatedMyListData);
        setMyListData(updatedMyListData);
        setIsClicked(false);
    }
  return (
    <div>
        <h1>welcome, {props.name}</h1>
        {console.log("Home Component rendered!!!!")}
        {console.log(isClicked)}
        <ul>
           {myListData.map((item)=>(
            <li key={item.id}>
                {item.name} 
                <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li> 
           ))}
        </ul>
        {isClicked ? <button>Add to cart</button> : <button>Remove from cart</button>}
    </div>
  )
}

export default Home
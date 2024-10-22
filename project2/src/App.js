import React from 'react'
import { fruits } from './Fruits'
import Button1 from './Button1';

const items = fruits.map(fruit=>
  <li key={fruit.id} style={{color:fruit.local? 'red':'green'}}> 
    
    Name:{fruit.name} <br/>
    Price:{fruit.price}</li>
)

function MyButton(){
  function HandleClick(){
    alert ("You have clicked");
  }
  return(
    <button className='blue' onClick={HandleClick}>Click Here</button>
  )
}


  const user = {
    name: "Rummana",
    imgUrl:"images/no.jpg",
    imgSize: 100
   }




export default function App() {
  return (
    <>
    <div>Welcome to my new world class App</div>
    <MyButton>Click</MyButton>
    <h1>{user.name}</h1>
    <img src={user.imgUrl} alt="{user.name}" style={{width:'500px'}}/>
    <hr/>
    <ul>{items}</ul>

    <Button1/>
  </>
  )
}

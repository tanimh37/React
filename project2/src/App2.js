import React, {useState} from 'react'

export default function App2() {
    const [car, setCar] = useState({
        model:"Toyota",
        color:"blue",
        year:1945,
        price:"10k"
    });
console.log(car);

const handleChange = (oldinfo) => {
   setCar(oldinfo =>{
    return {...oldinfo,color:"red", engine:"2500hp"}
   }) 
}


  return (
<>
<h1>Car Information</h1>
<p>
   <b> Model:{car.model},Color:{car.color},Year:{car.year},Price:{car.price}</b>
</p>

<button onClick={handleChange}>Click Hardly</button>
</>
  )
}

import React, {useState,useEffect} from 'react'


export default function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 0);
    }, []);
  
    return <h1>I've rendered {count} times!</h1>;
  }
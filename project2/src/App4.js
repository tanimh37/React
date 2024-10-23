import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
       axios.get(`https://jsonplaceholder.typicode.com/posts`)

      .then((result) => {
        setData(result.data);
      })
  }

  //console.log(data);

  return (
    <>
      <div>Data Display</div>
    
      {data.map((item)=>{
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        )
      })}
    </>
  )
}

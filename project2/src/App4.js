import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App4() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const myData = axios
      .get(`https://jsonplaceholder.typicode.com/posts`)

      .then((result) => {
        const myData = result.data;

        //console.log(myData);

        setData(myData);
      });
  }

  //console.log(data);

  return <div>Data Display</div>


}

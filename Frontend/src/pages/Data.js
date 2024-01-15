import React, { useEffect, useState } from "react";

const Data = () => {

    const [data, setData ] = useState([]);
    const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);
  return(
     <div>
        {
            data.map((item, id)=>(
                <h1 key={id}>{ item.name }</h1>
            ))
        }
    </div>
)};

export default Data;

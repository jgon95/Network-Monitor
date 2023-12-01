import React, { useState, useEffect } from "react";
import './NetworkMap.css';

function NetworkMap({ name, age, date, programming }) {
  const [data, setdata] = useState({
    name: "Revival Servers JK",
    age: 0,
    date: "11/22/23",
    programming: "PYTHON BACKEND TEST",
  });


  return (
    <article className="network-map">
      <div className="api-data">
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Date: {data.date}</p>
        <p>Programming: {data.programming}</p>
      </div>
      {/* Network map component or image */}
    </article>
  );
}


export default NetworkMap;

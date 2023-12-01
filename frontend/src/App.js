// App.js
import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import NetworkMap from './components/NetworkMap';
import './App.css'; // For general styles
import GraphA from './components/GraphA'; // Import GraphA
import GraphB from './components/GraphB'; // Import GraphB

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    name: "",
    age: null,
    date: "",
    programming: "",
  });



  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
    );
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className="dashboard">
          <div className="graph-section">
            <div className="graph">
              <GraphA type="wan" />
            </div>
            <div className="graph">
              <GraphB type="lan" />
            </div>
          </div>
          <div className="network-section">
            <NetworkMap />
          </div>
          <div className="device-section">
            <DeviceList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

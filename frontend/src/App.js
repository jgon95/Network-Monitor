// App.js
import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import GraphSection from './components/GraphSection';
import NetworkMap from './components/NetworkMap';
import './App.css'; // For general styles
import DarkModeToggle from './components/DarkModeToggle';

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
      <Header />
      <DeviceList />
      <GraphSection />
      <NetworkMap />
      <DarkModeToggle className="dark-mode-button"/>
        {data.name} 
        {data.age} 
        {data.date} 
        {data.programming}
    </div>
  );
}

export default App;

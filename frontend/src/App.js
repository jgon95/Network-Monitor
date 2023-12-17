import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import NetworkMap from './components/NetworkMap';
import './App.css'; // For general styles
import GraphA from './components/GraphA'; // Import GraphA
import GraphB from './components/GraphB'; // Import GraphB

function App() {

  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className="dashboard">
          <div className="graph-section">
            <div className="graph">
              <GraphA type="network-loss" />
            </div>
            <div className="graph">
              <GraphB type="bandwidth" />
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

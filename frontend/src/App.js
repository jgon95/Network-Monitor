// App.js
import React,{useState} from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import GraphSection from './components/GraphSection';
import NetworkMap from './components/NetworkMap';
import './App.css'; // For general styles
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="app">
<DarkModeToggle className="dark-mode-button"/>
      <Sidebar />
      <Header />
      <DeviceList />
      <GraphSection />
      <NetworkMap />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import GraphSection from './components/GraphSection';
import NetworkMap from './components/NetworkMap';
import './App.css';

function App() {

    return (
        <div className="app">
            <Sidebar />
            <Header />
            <DeviceList />
            <GraphSection />
            <NetworkMap />
        </div>
    );
}

export default App;

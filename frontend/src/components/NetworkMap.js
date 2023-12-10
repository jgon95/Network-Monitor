import React, { useState, useEffect } from "react";
import './NetworkMap.css';

function NetworkMap() {
    const [data, setData] = useState({
        name: "Test Name",
        age: 0,
        date: "11/22/23",
        programming: "PYTHON BACKEND TEST",
    });


    const [bandwidth, setBandwidth] = useState({ bytes_sent: 0, bytes_recv: 0 });
    const [systemData, setSystemData] = useState({
        cpu_usage: 0,
        memory_usage: 0,
        disk_usage: 0
    });

    const [deviceStatus, setDeviceStatus] = useState({ uptime: "" });
    const [networkLoss, setNetworkLoss] = useState({ bytes_sent_loss: 0, bytes_recv_loss: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('/bandwidth')
                .then(response => response.json())
                .then(data => setBandwidth(data));

            fetch('/system-data')
                .then(response => response.json())
                .then(data => setSystemData(data));

            fetch('/device-status')
                .then(response => response.json())
                .then(data => setDeviceStatus(data));

            fetch('/network-loss')
                .then(response => response.json())
                .then(data => setNetworkLoss(data));
        }, 1000); // Fetch data every second

        return () => clearInterval(interval);
    }, []);

    return (
        <article className="network-map">
            <div className="api-data">
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                <p>Date: {data.date}</p>
                <p>Programming: {data.programming}</p>
                <p>Bytes Sent: {bandwidth.bytes_sent}</p>
                <p>Bytes Received: {bandwidth.bytes_recv}</p>
                <p>CPU Usage: {systemData.cpu_usage}%</p>
                <p>Memory Usage: {systemData.memory_usage}%</p>
                <p>Disk Usage: {systemData.disk_usage}%</p>
                <p>Device Uptime: {deviceStatus.uptime}</p>
                <p>Network Bytes Sent Loss: {networkLoss.bytes_sent_loss}</p>
                <p>Network Bytes Received Loss: {networkLoss.bytes_recv_loss}</p>
            </div>
            {/* Network map component or image */}
        </article>
    );
}

export default NetworkMap;
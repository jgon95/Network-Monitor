import React, { useState, useEffect } from "react";
import './NetworkMap.css';

function NetworkMap() {
    const [bandwidth, setBandwidth] = useState({ bytes_sent: 0, bytes_recv: 0 });
    const [systemData, setSystemData] = useState({
        cpu_usage: 0,
        memory_usage: 0,
        disk_usage: 0
    });

    const [deviceStatus, setDeviceStatus] = useState({ uptime: "" });

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
        }, 1000); // Fetch data every second

        return () => clearInterval(interval);
    }, []);

    return (
        <article className="network-map">
            <div className="api-data">
                <p>Bytes Sent: {bandwidth.bytes_sent}</p>
                <p>Bytes Received: {bandwidth.bytes_recv}</p>
                <p>CPU Usage: {systemData.cpu_usage}%</p>
                <p>Memory Usage: {systemData.memory_usage}%</p>
                <p>Disk Usage: {systemData.disk_usage}%</p>
                <p>Device Uptime: {deviceStatus.uptime}</p>
            </div>
            {/* Network map component or image */}
        </article>
    );
}

export default NetworkMap;
import React from 'react';
import './DeviceList.css'; // Ensure you have the corresponding CSS file

function DeviceList() {
  // Dummy device data
  const devices = [
    { name: "Device 1", status: "Online", ip: "192.168.1.1", lastActive: "2023-11-28 12:00" },
    { name: "Device 2", status: "Offline", ip: "192.168.1.2", lastActive: "2023-11-28 10:30" },
    { name: "Device 3", status: "Online", ip: "192.168.1.3", lastActive: "2023-11-28 8:45" },
    { name: "Device 4", status: "Online", ip: "192.168.1.3", lastActive: "2023-11-28 12:32" },
    { name: "Device 5", status: "Online", ip: "192.168.1.3", lastActive: "2023-11-28 5:46" },
    { name: "Device 6", status: "Online", ip: "192.168.1.3", lastActive: "2023-11-28 6:54" },
    { name: "Device 7", status: "Offline", ip: "192.168.1.3", lastActive: "2023-11-28 3:35" },
    // ... more devices
  ];

  return (
    <aside className="device-list">
      {devices.map((device, index) => (
        <div key={index} className="device-item">
          <div className="left-column">
            <div className="column-title">Name:</div>
            <div>{device.name}</div>
          </div>
          <div className="right-column">
            <div className="column-title">Details:</div>
            <div className={device.status === 'Online' ? 'online-status' : 'offline-status'}>
              Status: {device.status}
            </div>
            <div>IP: {device.ip}</div>
            <div>Last Active: {device.lastActive}</div>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default DeviceList;

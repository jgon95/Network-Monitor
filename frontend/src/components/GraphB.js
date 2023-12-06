import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function GraphB() {
    // Initial state for the LAN graph data
    const [lanData, setLanData] = useState({
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
        datasets: [
            {
                label: 'LAN Throughput (Mbps)',
                data: [200, 210, 190, 230, 220, 240],
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            updateGraphData(); // Function to update data
        }, 2000); // Update every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [lanData]);

    const updateGraphData = () => {
        // Create new data array based on the current state
        const newData = lanData.datasets[0].data.slice(); // Clone the current data array
        newData.shift(); // Remove the first element

        // Generate a new data point
        const lastDataPoint = newData[newData.length - 1] || 0;
        const newPoint = Math.max(0, lastDataPoint + (Math.random() - 0.5) * 10);
        newData.push(newPoint); // Add the new data point to the array

        // Update the state with the new data
        setLanData({
            ...lanData,
            datasets: [{
                ...lanData.datasets[0],
                data: newData
            }]
        });
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
    };

    return (
        <div className="graph-container">
            <Line data={lanData} options={options} />
        </div>
    );
}

export default GraphB;

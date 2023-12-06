import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import to register the appropriate chart type

const GraphA = () => {
  // Initial state for the WAN graph data
  const [wanData, setWanData] = useState({
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
    datasets: [
      {
        label: 'WAN Throughput (Mbps)',
        data: [120, 110, 150, 170, 160, 180],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateGraphData(); // Function to update data
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [wanData]);

  const updateGraphData = () => {
    // Create new data array based on the current state
    const newData = wanData.datasets[0].data.slice(); // Clone the current data array
    newData.shift(); // Remove the first element

    // Generate a new data point
    const lastDataPoint = newData[newData.length - 1] || 0;
    const newPoint = Math.max(0, lastDataPoint + (Math.random() - 0.5) * 10);
    newData.push(newPoint); // Add the new data point to the array

    // Update the state with the new data
    setWanData({
      ...wanData,
      datasets: [{
        ...wanData.datasets[0],
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
      <Line data={wanData} options={options} />
    </div>
  );
};

export default GraphA;

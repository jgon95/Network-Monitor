import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphA = () => {
  const updateInterval = 2000; // 2 seconds
  const dataPoints = 6;

  const generateInitialLabels = () => {
    let labels = [];
    let now = new Date();
    for (let i = dataPoints - 1; i >= 0; i--) {
      let time = new Date(now.getTime() - i * updateInterval);
      labels.push(time.toTimeString().split(' ')[0]);
    }
    return labels;
  };

  const [networkLossData, setNetworkLossData] = useState({
    labels: generateInitialLabels(),
    datasets: [
      {
        label: 'Network Bytes Sent Loss',
        data: Array(dataPoints).fill(0),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Network Bytes Received Loss',
        data: Array(dataPoints).fill(0),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateGraphData(); // Function to update data
    }, updateInterval); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const updateGraphData = () => {
    fetch('/network-loss')
      .then(response => response.json())
      .then(data => {
        const newTime = new Date().toTimeString().split(' ')[0];

        setNetworkLossData(prevData => {
          const updatedSentLossData = [...prevData.datasets[0].data, data.bytes_sent_loss].slice(-dataPoints);
          const updatedRecvLossData = [...prevData.datasets[1].data, data.bytes_recv_loss].slice(-dataPoints);
          const updatedLabels = [...prevData.labels, newTime].slice(-dataPoints);

          return {
            labels: updatedLabels,
            datasets: [
              { ...prevData.datasets[0], data: updatedSentLossData },
              { ...prevData.datasets[1], data: updatedRecvLossData }
            ]
          };
        });
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
      <Line data={networkLossData} options={options} />
    </div>
  );
};

export default GraphA;

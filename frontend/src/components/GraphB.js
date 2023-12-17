import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function GraphB() {
    const dataPoints = 6;
    const updateInterval = 2000; // 2 seconds

    const generateInitialLabels = () => {
        let labels = [];
        let now = new Date();
        for (let i = dataPoints - 1; i >= 0; i--) {
            let time = new Date(now.getTime() - i * updateInterval);
            labels.push(time.toTimeString().split(' ')[0]);
        }
        return labels;
    };

    const [byteData, setByteData] = useState({
        labels: generateInitialLabels(),
        datasets: [
            {
                label: 'Bytes Sent (MB)',
                data: Array(dataPoints).fill(0),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Bytes Received (MB)',
                data: Array(dataPoints).fill(0),
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
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
        fetch('/bandwidth')
            .then(response => response.json())
            .then(data => {
                const newTime = new Date().toTimeString().split(' ')[0];
                const newSentPoint = data.bytes_sent / (1024 * 1024); // Convert bytes to MB
                const newRecvPoint = data.bytes_recv / (1024 * 1024); // Convert bytes to MB

                setByteData(prevData => {
                    const updatedSentData = [...prevData.datasets[0].data, newSentPoint].slice(-dataPoints);
                    const updatedRecvData = [...prevData.datasets[1].data, newRecvPoint].slice(-dataPoints);
                    const updatedLabels = [...prevData.labels, newTime].slice(-dataPoints);

                    return {
                        labels: updatedLabels,
                        datasets: [
                            { ...prevData.datasets[0], data: updatedSentData },
                            { ...prevData.datasets[1], data: updatedRecvData },
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
            <Line data={byteData} options={options} />
        </div>
    );
}

export default GraphB;

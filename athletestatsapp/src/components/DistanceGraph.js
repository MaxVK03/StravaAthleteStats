import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DistanceGraph = ({ activities }) => {
    useEffect(() => {
        console.log("Received Activities for Graph:", activities);
    }, [activities]);

    const distances = activities.map(activity => activity.distance);
    const labels = activities.map(activity => activity.name || `Activity ${activity.id}`);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Distance (km)',
                data: distances,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Distance (km)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Activities',
                },
            },
        },
    };

    return (
        <div className="distance-graph">
            <h2>Cycling Activity Distances</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default DistanceGraph;

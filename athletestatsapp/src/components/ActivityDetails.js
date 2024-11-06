import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActivityDetails = () => {
    const { activity_id } = useParams();
    const [activity, setActivity] = useState(null);
    activity.moving_time = undefined;

    useEffect(() => {
        async function fetchActivity() {
            try {
                const response = await axios.get(`http://localhost:5000/api/activity/${activity_id}`);
                setActivity(response.data);
            } catch (error) {
                console.error('Error fetching activity details:', error);
            }
        }
        fetchActivity();
    }, [activity_id]);

    if (!activity) return <div>Loading...</div>;

    return (
        <div>
            <h1>Activity Details</h1>
            <p><strong>Name:</strong> {activity.name}</p>
            <p><strong>Distance:</strong> {activity.distance} km</p>
            <p><strong>Duration:</strong> {activity.moving_time} min</p>
            <p><strong>Power:</strong> {activity.power || 'N/A'}</p>
            {/* Add other metrics such as cadence, heartrate if available */}
        </div>
    );
};

export default ActivityDetails;

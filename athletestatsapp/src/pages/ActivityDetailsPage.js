import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActivityDetails } from '../services/activityService';

const ActivityDetailsPage = () => {
    const { activity_id } = useParams();
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
            try {
                const activityData = await getActivityDetails(activity_id);
                setActivity(activityData);
            } catch (err) {
                setError('Error fetching activity details');
            } finally {
                setLoading(false);
            }
        }
        fetchDetails();
    }, [activity_id]);

    if (loading) return <p>Loading activity details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>{activity.name}</h1>
            <p><strong>Distance:</strong> {activity.distance} km</p>
            <p><strong>Duration:</strong> {activity.moving_time / 60} min</p>
            <p><strong>Power:</strong> {activity.power || 'N/A'}</p>
            {/* Display other metrics like cadence, heart rate */}
        </div>
    );
};

export default ActivityDetailsPage;

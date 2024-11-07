import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import {getActivity} from "../../api";

const ActivityPage = () => {
    const { activityId } = useParams();
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const data = await getActivity(activityId);
                console.log('ActivityPage received activity:', activity);
                setActivity(data);
            } catch (error) {
                console.error('Failed to load activity:', error);
            }
        };
        fetchActivity();
    }, [activityId]);

    return (
        <div className="activity-page">
            <h1>Activity Details</h1>
            {activity ? (
                <ActivityCard activity={activity} />
            ) : (
                <p>Loading activity...</p>
            )}
        </div>
    );
};

export default ActivityPage;

import { useEffect, useState } from 'react';
import { getRecentActivities } from '../api';

const useRecentActivities = (limit = 10) => {
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const data = await getRecentActivities(limit);
                setActivities(data);
            } catch (err) {
                setError('Failed to load activities');
            }
        };
        fetchActivities();
    }, [limit]);

    return { activities, error };
};

export default useRecentActivities;

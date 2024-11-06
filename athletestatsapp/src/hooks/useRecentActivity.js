import { useEffect, useState } from 'react';
import axios from 'axios';

function useRecentActivity() {
    const [activity, setActivity] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRecentActivity() {
            try {
                const response = await axios.get('http://localhost:8000/recent_activity');  // Your FastAPI endpoint
                setActivity(response.data);
            } catch (err) {
                setError('Error fetching recent activity');
                console.error('Error:', err);
            }
        }
        fetchRecentActivity();
    }, []);

    return { activity, error };
}

export default useRecentActivity;

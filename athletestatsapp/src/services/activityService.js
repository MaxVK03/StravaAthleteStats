import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'

export const getRecentActivity = async () => {
    const response = await axios.get(`${API_BASE_URL}/recent_activity`);
    console.log(response.data)
    return {
        id: response.data.id,
        name: response.data.name || 'Unnamed Activity',
        distance: (response.data.distance / 1000).toFixed(2),
        moving: Math.round(response.data.moving_time / 360), // Convert seconds to rounded minutes
        elapsed: Math.round(response.data.elapsed_time / 360), // Convert seconds to rounded minutes
        watts: response.data.average_watts || 'N/A',
    };
};

export const getActivityDetails = async (activity_id) => {
    const response = await axios.get(`${API_BASE_URL}/activity/${activity_id}`);
    return response.data;
};

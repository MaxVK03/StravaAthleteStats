import axios from 'axios';

// Create a base instance for your API to avoid repetition
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',  // Replace this URL with your FastAPI's base URL
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getActivity = async (activityId) => {
    try {
        const response = await apiClient.get(`/activity/${activityId}`);
        const activity = response.data;
        console.log('Fetched Activity in getActivity:', activity)

        return {
            id: activity.id,
            name: activity.name || 'Unnamed Activity',
            distance: (activity.distance / 1000).toFixed(2),
            moving: Math.round(activity.moving_time / 60), // Convert seconds to minutes
            elapsed: Math.round(activity.elapsed_time / 60), // Convert seconds to minutes
            watts: activity.average_watts || 'N/A',
        };
    } catch (error) {
        console.error(`Error fetching activity ${activityId}:`, error);
        throw error;
    }
};

export const getRecentActivities = async (limit = 10) => {
    const baseURL = 'http://127.0.0.1:8000'  // Replace this URL with your FastAPI's base URL
    const response = await axios.get(`${baseURL}/recent_activities/${limit}`);
    return response.data.map(activity => ({
        id: activity.id,
        name: activity.name || 'Unnamed Activity',
        distance: (activity.distance / 1000).toFixed(2),
        moving: Math.round(activity.moving_time / 60), // Convert seconds to minutes
        elapsed: Math.round(activity.elapsed_time / 60), // Convert seconds to minutes
        watts: activity.average_watts || 'N/A',
    }));
};

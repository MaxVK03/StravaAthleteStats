import axios from 'axios';

// Create a base instance for your API to avoid repetition
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',  // Replace this URL with your FastAPI's base URL
    headers: {
        'Content-Type': 'application/json',
    }
});

// Fetch recent activity from FastAPI
export const getRecentActivity = async () => {
    try {
        const response = await apiClient.get('/recent_activity');
        return response.data;
    } catch (error) {
        console.error('Error fetching recent activity:', error);
        throw error;
    }
};

// Fetch specific activity details from FastAPI by activity ID
export const getActivity = async (activityId) => {
    try {
        const response = await apiClient.get(`/activity/${activityId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching activity ${activityId}:`, error);
        throw error;
    }
};

// Fetch power stream from FastAPI for a specific activity
export const getPowerStream = async (activityId) => {
    try {
        const response = await apiClient.get(`/powerStream?activity_id=${activityId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching power stream:', error);
        throw error;
    }
};

// Fetch power stream for the most recent activity from FastAPI
export const getRecentPowerStream = async () => {
    try {
        const response = await apiClient.get('/recentPowerStream');
        return response.data;
    } catch (error) {
        console.error('Error fetching recent power stream:', error);
        throw error;
    }
};

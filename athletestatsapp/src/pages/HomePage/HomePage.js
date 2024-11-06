import React from 'react';
import './HomePage.css';
import useRecentActivity from "../../hooks/useRecentActivity";
import ActivityCard from "../../components/ActivityCard/ActivityCard";

const HomePage = () => {
    const { activity, error } = useRecentActivity();

    return (
        <div className="home-page">
            <h1 className="home-header">Recent Activity</h1>
            {error && <p className="error-message">{error}</p>}
            {activity ? (
                <ActivityCard activity={activity} />
            ) : (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default HomePage;

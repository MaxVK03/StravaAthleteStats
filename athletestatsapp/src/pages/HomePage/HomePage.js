import React from 'react';
import './HomePage.css';
import useRecentActivities from "../../hooks/useRecentActivities";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import DistanceGraph from "../../components/DistanceGraph";

const HomePage = () => {
    const { activities, error } = useRecentActivities(10);
    console.log("Fetched Activities in HomePage:", activities); // Check if activities are fetched

    // Filter activities to show only cycling ones in the graph
    const cyclingActivities = activities

    return (
        <div className="home-page">
            <h1 className="home-header">Recent Activities</h1>
            {error && <p className="error-message">{error}</p>}
            {activities.length ? (
                <div className="content-wrapper">
                    <div className="activities-section">
                        {activities.map(activity => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))}
                    </div>
                    <div className="graph-section">
                        <DistanceGraph activities={cyclingActivities} />
                    </div>
                </div>
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

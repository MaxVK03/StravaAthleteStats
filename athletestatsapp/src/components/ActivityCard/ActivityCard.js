import React from 'react';
import './ActivityCard.css';
import { Link } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
    const { name, distance, moving, watts } = activity;

    return (
        <div className="activity-card">
            <h2 className="activity-name">{name}</h2>
            <p className="activity-details"><strong>Distance: {distance} km</strong></p>
            <p><strong>Duration {activity.moving} minutes</strong></p>
            <p><strong>Average Power: {watts ? `${watts} Watts` : 'N/A'}</strong></p>

            <Link to={`/activity/${activity.id}`} className="view-details-link">
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default ActivityCard;

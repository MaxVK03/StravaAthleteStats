import React from 'react';
import './ActivityCard.css';
import {Link} from "react-router-dom";

const ActivityCard = ({ activity, onClick }) => {
    const { name, distance, duration, average_watts } = activity;
    console.log('ActivityCard received activity:', activity);

    return (
        <div className="activity-card" onClick={onClick}>
            <h2 className="activity-name">{name}</h2>
            <p className="activity-details"><strong>Distance: {distance} km</strong></p>
            <p><strong>moving: {activity.moving_time} minutes</strong></p>
            <p><strong>elapsed: {activity.elapsed_time} minutes</strong></p>
            <p><strong>Average Power: {average_watts ? `${average_watts} Watts` : 'N/A'}</strong></p>

            {/* Display other metrics like cadence, heart rate */}
            <Link to={`/activity/${activity.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default ActivityCard;

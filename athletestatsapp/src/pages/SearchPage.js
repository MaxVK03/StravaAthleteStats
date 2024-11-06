import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const [activityId, setActivityId] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/activity/${activityId}`);
    };

    return (
        <div>
            <h1>Search Activity</h1>
            <input
                type="text"
                value={activityId}
                onChange={(e) => setActivityId(e.target.value)}
                placeholder="Enter activity ID"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchPage;

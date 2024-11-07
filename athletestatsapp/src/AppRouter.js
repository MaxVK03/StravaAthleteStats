import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ActivityPage from './pages/ActivityPage/ActivityPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/activity/:activityId" element={<ActivityPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

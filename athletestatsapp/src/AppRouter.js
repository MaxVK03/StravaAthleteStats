import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ActivityDetailsPage from './pages/ActivityDetailsPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/activity/:activity_id" element={<ActivityDetailsPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

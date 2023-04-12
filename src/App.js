import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/homepage/landingPage';
import PointCollection from './pages/homepage/pointCollection';
import RewardsPage from './pages/points-rewards/rewards';
import History from './pages/history/history';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/point-collection" element={<PointCollection />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  )
}
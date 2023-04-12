import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/homepage/landingPage';
import PointCollection from './pages/homepage/pointCollection';
import RewardsPage from './pages/points-rewards/rewards';
import History from './pages/history/history';
import MyAccount from './pages/my-account/my-account';

import PointCollectionAccount from './pages/points-rewards/pointCollectionAccount';
import TermsAndConditions from './pages/points-rewards/termsAndConditions';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/point-collection" element={<PointCollection />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/point-collection-account" element={<PointCollectionAccount />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  )
}
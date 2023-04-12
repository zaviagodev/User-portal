import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/homepage/landingPage';
import PointCollection from './pages/homepage/pointCollection';
import RewardsPage from './pages/points-rewards/rewards';
import History from './pages/history/history';
import MyAccount from './pages/my-account/my-account';

import PointCollectionAccount from './pages/my-account/pointCollectionAccount';
import TermsAndConditions from './pages/my-account/termsAndConditions';
import ConsentForDisclosure from './pages/my-account/consentForDisclosure';
import ExchangeRewards from './pages/my-account/exchangeRewards';
import MemberCondition from './pages/my-account/memberCondition';
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
        <Route path="/consent-for-disclosure" element={<ConsentForDisclosure />} />
        <Route path="/exchange-rewards" element={<ExchangeRewards />} />
        <Route path="/member-condition" element={<MemberCondition />} />
      </Routes>
    </Router>
  )
}
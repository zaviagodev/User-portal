import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import PointCollection from './pages/pointCollection';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/point-collection" element={<PointCollection />} />
      </Routes>
    </Router>
  )
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HelloWorld from './HelloWorld';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<HelloWorld />} />
      </Routes>
    </Router>
  );
}

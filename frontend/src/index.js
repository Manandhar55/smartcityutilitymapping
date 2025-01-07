// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' in React 18
import './index.css';  // Optional for global styles
import App from './App';  // Main App component
import { BrowserRouter as Router } from 'react-router-dom';

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

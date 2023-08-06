// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage /> {/* Render the LandingPage component */}
  </React.StrictMode>,
  document.getElementById('root')
);

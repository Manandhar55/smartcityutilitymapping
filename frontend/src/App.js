// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch in React Router v6
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CoreComponents from './components/Core_components';
import Feedback from './components/feedback';
import ContactUs from './components/Contact_us';
import Download from './components/Download';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/core_components" element={<CoreComponents />} />
        <Route path="/download" element={<Download />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;

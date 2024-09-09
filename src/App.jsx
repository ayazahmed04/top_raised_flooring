// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeApp from './homeapp';
import { NotFound } from './Routes/NotFound';
import ContactForm from './Routes/Emailjs';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/About" element={<HomeApp />} />
      <Route path='*'  element={<NotFound />} />

      <Route path='/login'  element={<ContactForm />} />
      

      </Routes>
    </Router>
  );
}

export default App;
  
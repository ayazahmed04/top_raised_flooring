// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeApp from './homeapp';
import { NotFound } from './Routes/NotFound';
import ContactForm from './Routes/Emailjs';
import Projects from './projects/projects_top';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import products_top from './products/products_top';
import ProductList from './products/components/ProductList';
import ProductDetail from './products/components/ProductDetail';
import AboutUs from './about/aboutus';
import Faq from './faq/faq';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/About" element={<HomeApp />} />
      <Route path='*'  element={<NotFound />} />

      <Route path='/login'  element={<ContactForm />} />
      <Route path='/projects' element={<Projects />} />
      <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='/faq' element={<Faq />} />

      </Routes>
    </Router>
  );
}

export default App;
  
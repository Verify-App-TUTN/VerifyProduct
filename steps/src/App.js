import React from 'react';
import './App.css';
import ProductN from './components/ProductN';
import Footer from './components/Footer';
import VerifyForm from './components/VerifyForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verifyproduct from './components/Verifyproduct';

function App() {
  document.title = "Verify Product"
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<ProductN />} />
          <Route path='Verify' element={<VerifyForm />} />
          <Route path='VerifyP' element={<Verifyproduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

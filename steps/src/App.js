import React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './assets/logo.png';
import ProductN from './components/ProductN';
import Footer from './components/Footer';
import VerifyForm from './components/VerifyForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header
        img={Logo}
        link1="Integrate Product"
        link2="About Us"
        link3="Contact Us"
        link4="Sign Up"
        buttonText="Sign Up"
        button={true}
      />
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<ProductN />} />
          <Route path='Verify' element={<VerifyForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

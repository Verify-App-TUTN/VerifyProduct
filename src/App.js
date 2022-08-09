import React from "react";
import "./App.css";
import ProductN from "./components/ProductN";
import Footer from "./components/Footer";
import VerifyForm from "./components/VerifyForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verifyproduct from "./components/Verifyproduct";
import Landing from "./components/Landing";

function App() {
  document.title = "Verify Product";
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route path="verifyform" element={<VerifyForm />} />
          <Route path="verifyproduct" element={<Verifyproduct />} />
          <Route path="product" element={<ProductN />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

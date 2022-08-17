import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../components/Landing";
import VerifyForm from "../components/VerifyForm";
import Verifyproduct from "../components/Verifyproduct";
import ProductN from "../components/ProductN";
import Footer from "../components/Footer";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/verifyform" element={<VerifyForm />} />
        <Route path="/verifyproduct" element={<Verifyproduct />} />
        <Route path="/product" element={<ProductN />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PageRoutes;

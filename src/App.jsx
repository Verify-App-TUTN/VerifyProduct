import React, { useEffect } from "react";
import "./index.css";
import {ComingSoon,  Home, ProductN, VerifyForm, Verifyproduct} from "./pages"
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!!hash) return;
    window.scrollTo(0, 0);
  },[pathname, hash])
  document.title = "Verify Product";
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/:page" element={<ComingSoon />} />
       <Route path="/verifyform" element={<VerifyForm />} /> 
      <Route path="/verifyproduct" element={<Verifyproduct />} />
      <Route path="/product" element={<ProductN />} /> 
    </Routes>
  );
}

export default App;

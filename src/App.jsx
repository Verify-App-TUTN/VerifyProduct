import React from "react";
import "./index.css";
import {Home} from "./pages"
import { Route, Routes } from "react-router-dom";
const  App = () => {
  document.title = "Verify Product";
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      {/* <Route path="/verifyform" element={<VerifyForm />} />
      <Route path="/verifyproduct" element={<Verifyproduct />} />
      <Route path="/product" element={<ProductN />} /> */}
    </Routes>
  );
}

export default App;

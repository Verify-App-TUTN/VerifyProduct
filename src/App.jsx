import React from "react";
import "./index.css";
import {Home, ProductN, VerifyForm, Verifyproduct} from "./pages"
import { Route, Routes } from "react-router-dom";
function App() {
  document.title = "Verify Product";
  return (
    <Routes>
      <Route index path="/:ff" element={<Home />} />
      {/* <Route path="/verifyform" element={<VerifyForm />} />
      <Route path="/verifyproduct" element={<Verifyproduct />} />
      <Route path="/product" element={<ProductN />} /> */}
    </Routes>
  );
}

export default App;

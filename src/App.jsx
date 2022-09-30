import React from "react";
import "./index.css";
import {ComingSoon, ContactUs, Home} from "./pages"
import { Route, Routes } from "react-router-dom";
const  App = () => {
  document.title = "Verify Product";
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/contactus" element={<ContactUs />} />
      <Route index path="/:page" element={<ComingSoon />} />
      {/* <Route path="/verifyform" element={<VerifyForm />} />
      <Route path="/verifyproduct" element={<Verifyproduct />} />
      <Route path="/product" element={<ProductN />} /> */}
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Builder from "../components/Builder/Builder";
import Receipt from "../components/Receipt/Receipt";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

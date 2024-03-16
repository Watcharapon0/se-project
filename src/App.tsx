import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import HomeSale from "./components/teamsale/homeSale"
import TravelSale from "./components/teamsale/travelSale";
import "./assets/font/Kanit Regular.ttf"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homes" element={<HomeSale />} />
          <Route path="/tsale" element={<TravelSale />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

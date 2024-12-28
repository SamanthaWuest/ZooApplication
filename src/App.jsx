import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout";
import Audioguides from "./pages/Audioguides.jsx";
import Tickets from "./pages/Tickets.jsx";
import Lageplan from "./pages/Lageplan.jsx";
import Suchfeld from "./pages/Suchfeld.jsx";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="audioguides" element={<Audioguides />} />  
            <Route path="tickets" element={<Tickets />} />
            <Route path="lageplan" element={<Lageplan />} />
            <Route path="suchfeld" element={<Suchfeld />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout";
import Tickets from "./pages/Tickets.jsx";
import Suchfeld from "./pages/Suchfeld.jsx";
import Login from "./pages/Login.jsx";
import Audioguides from "./pages/Audioguides.jsx";
import Bestätigung from "./pages/Bestätigung.jsx";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />  
            <Route path="tickets" element={<Tickets />} />
            <Route path="suchfeld" element={<Suchfeld />} />
            <Route path="audioguides" element={<Audioguides />} />
            <Route path="bestätigung" element={<Bestätigung />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

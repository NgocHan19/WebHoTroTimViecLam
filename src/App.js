import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Logout from './components/Account/Logout';
import Header_NTV from './components/Header/Header_NTV';
import Info from './components/Account/Info';
import Change_Pass from './components/Account/Change_Pass';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

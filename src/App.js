import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

//components & pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

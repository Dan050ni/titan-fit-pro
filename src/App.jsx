// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

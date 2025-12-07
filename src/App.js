import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';

function App(){
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

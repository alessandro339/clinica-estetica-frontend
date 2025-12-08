import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Rotas usuário
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';

// Rotas admin
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './pages/AdminRoute'; // componente de proteção de rota admin

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Rotas usuário */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />

          {/* Rotas admin */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const backend = process.env.REACT_APP_BACKEND || 'https://clinica-estetica-daiane-backend-yztv.onrender.com';

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Aqui podemos adicionar validação se é admin
      const res = await axios.post(`${backend}/api/auth/admin-login`, { email, password });
      localStorage.setItem('adminToken', res.data.token);
      nav('/admin');
    } catch (err) {
      alert(err.response?.data?.error || 'Erro login admin');
    }
  };

  return (
    <div className="container">
      <h2>Login Administrador</h2>
      <form onSubmit={submit} className="card">
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn">Entrar</button>
      </form>
    </div>
  );
}

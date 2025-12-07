import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // CSS separado para o painel

const backend = process.env.REACT_APP_BACKEND || 'https://clinica-estetica-daiane-backend.onrender.com';

export default function AdminDashboard() {
  const nav = useNavigate();
  const token = localStorage.getItem('adminToken'); // token do admin
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(60);

  // Verifica se o admin está logado
  useEffect(() => {
    if (!token) {
      nav('/admin-login');
    } else {
      loadBookings();
    }
  }, []);

  // Carrega agendamentos
  const loadBookings = async () => {
    try {
      const res = await axios.get(`${backend}/api/admin/bookings`, {
        headers: { Authorization: 'Bearer ' + token }
      });
      setBookings(res.data);
    } catch (err) {
      console.error(err);
      setBookings([]);
    }
  };

  // Aprovar ou rejeitar agendamento
  const handleBooking = async (id, action) => {
    try {
      await axios.post(`${backend}/api/admin/bookings/${id}/approve`, { action }, {
        headers: { Authorization: 'Bearer ' + token }
      });
      loadBookings();
    } catch (err) {
      alert('Erro ao atualizar agendamento');
    }
  };

  // Adicionar serviço
  const addService = async () => {
    if (!name || !duration) {
      alert('Preencha nome e duração do serviço');
      return;
    }

    try {
      await axios.post(`${backend}/api/admin/service`, { name, duration_minutes: duration }, {
        headers: { Authorization: 'Bearer ' + token }
      });
      setName('');
      setDuration(60);
      alert('Serviço adicionado com sucesso');
    } catch (err) {
      alert('Erro ao adicionar serviço');
    }
  };

  return (
    <div className="admin-container">
      <h2>Painel Administrativo</h2>

      <div className="card">
        <h3>Adicionar Serviço</h3>
        <input
          placeholder="Nome do serviço"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Duração (minutos)"
          type="number"
          value={duration}
          onChange={e => setDuration(e.target.value)}
        />
        <button className="btn" onClick={addService}>Adicionar Serviço</button>
      </div>

      <div className="card">
        <h3>Agendamentos</h3>
        <table className="booking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Serviço</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.client}</td>
                <td>{b.service}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.status}</td>
                <td>
                  <button onClick={() => handleBooking(b.id, 'APPROVE')} className="btn-approve">Aprovar</button>
                  <button onClick={() => handleBooking(b.id, 'REJECT')} className="btn-reject">Rejeitar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

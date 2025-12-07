import React from 'react';
import { Link } from 'react-router-dom';

export default function Booking() {
  return (
    <div className="container">
      <h1>Agendamento</h1>
      <p>Esta é a página de agendamento. Aqui você poderá testar a navegação.</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ marginRight: '10px' }}>Ir para Login</Link>
        <Link to="/register" style={{ marginRight: '10px' }}>Ir para Registro</Link>
        <Link to="/admin">Ir para Admin</Link>
      </div>

      <div style={{ marginTop: '40px' }}>
        <p>Para testar funcionalidades como selecionar serviço ou confirmar agendamento, você precisa estar logado.</p>
        <p>Use os links acima para criar uma conta ou fazer login.</p>
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const token = localStorage.getItem('adminToken'); // pega o token do admin
  const nav = useNavigate();

  useEffect(() => {
    if (!token) { // se não tiver token de admin
      nav('/admin-login'); // volta para a tela de login admin
    }
  }, [token, nav]);

  return token ? children : null; // só mostra o que está dentro se tiver token
}

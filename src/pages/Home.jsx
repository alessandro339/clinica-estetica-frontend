// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";  // depois criamos o CSS

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo">DS Beauty</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastrar</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Bem‑vindo à meu espaço</h1>
        <p>Cuide da sua beleza com praticidade e conforto.</p>
        <Link to="/booking" className="btn-primary">Agende seu horário</Link>
      </section>

      <section className="services">
        <h2>Nossos Serviços</h2>
        <div className="service-list">
          <div className="service-card">
            //<img src="/assets/servico1.jpg" alt="Serviço 1" />
            <h3>Higienização de pele</h3>
            <p>Limpeza profunda facial — 60 min</p>
          </div>
          <div className="service-card">
            //<img src="/assets/servico2.jpg" alt="Serviço 2" />
            <h3>Extensão de cílios</h3>
            <p>Duração 90 min</p>
          </div>
          {/* mais serviços... */}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Minha Clínica. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

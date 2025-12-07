import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const backend =
    process.env.REACT_APP_BACKEND ||
    "https://clinica-estetica-daiane-backend.onrender.com";

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backend}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      nav("/"); // redireciona para home após login
    } catch (err) {
      alert(err.response?.data?.error || "Erro ao logar");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit} className="card">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn">Entrar</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    // Aquí llamarás a la API backend para registrar
    // Por ahora simula éxito
    setMsg('Usuario registrado exitosamente. Puedes ingresar ahora.');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className="auth-page">
      <h2>Registro de usuario</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
        {msg && <p style={{ color: 'green', marginTop: '1rem' }}>{msg}</p>}
      </form>
    </section>
  );
};

export default Register;

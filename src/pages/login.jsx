import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    // Simulación de llamada API para autenticación
    // Luego esto cambiará a fetch a backend real

    // Usuarios de prueba:
    // admin: admin@titanfit.com / password: admin123
    // user: user@titanfit.com / password: user123

    if (
      (email === 'admin@titanfit.com' && password === 'admin123') ||
      (email === 'user@titanfit.com' && password === 'user123')
    ) {
      const role = email === 'admin@titanfit.com' ? 'admin' : 'user';
      const userData = { email, role };
      const fakeToken = '123456789abcdef'; // simulación

      login(userData, fakeToken);
      setError(null);
      // redirigir a dashboard o a admin panel según rol
      window.location.href = '/dashboard';
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <section className="auth-page">
      <h2>Iniciar sesión</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit">Ingresar</button>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </form>
    </section>
  );
};

export default Login;

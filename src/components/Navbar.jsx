// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1 className="logo">Titanfit</h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>

        {!user && (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/dashboard">Mi Panel</Link>
            {user.role === 'admin' && <Link to="/admin">Admin Panel</Link>}
            <button
              onClick={() => {
                logout();
                window.location.href = '/';
              }}
              className="btn-logout"
              aria-label="Cerrar sesión"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

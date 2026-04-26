import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
        <nav className="navbar">
            <h1 className="navbar-brand">BudgetTracker</h1>
            <ul className="navbar-links">
                {token ? (
                    <>
                        <li><Link to="/">Menü</Link></li>
                        <li><Link to="/transactions">Tranzakciók</Link></li>
                        <li><Link to="/categories">Kategóriák</Link></li>
                        <li><Link to="/statistics">Statisztika</Link></li>
                        <li><Link onClick={handleLogout}>Kijelentkezés</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Bejelentkezés</Link></li>
                        <li><Link to="/register">Regisztráció</Link></li>
                    </>
                )}
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;

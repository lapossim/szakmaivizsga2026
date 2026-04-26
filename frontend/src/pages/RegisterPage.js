import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { useAuth } from '../hooks/AuthContext';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(username, email, password);
            login({ username }, response.data.token);
            navigate('/');
        } catch (err) {
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <div>
            <title>Regisztráció</title>
            <h2>Regisztráció</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Felhasználónév</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Jelszó</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Regisztráció</button>
            </form>
        </div>
    );
};

export default RegisterPage;

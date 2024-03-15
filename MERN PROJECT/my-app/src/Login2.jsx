import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login2.css';

function Login2({ setIsLoggedIn, setUserId }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { Username: username, Password: password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            setIsLoggedIn(true);
            setUserId(response.data.userId);
            if (response.data.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/booking');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('incorrect username or password.');
        }
    };

    return (
        <div className="mainbg2">
            <div className='bgcolor2'>
                <div className="login2-container">
                    <div className="login2-form-container">
                        <h1 className="login2-title">Login</h1>
                        <h6>Please login to continue your booking</h6>
                        {error && <p className="login2-error">{error}</p>}
                        <form className="login2-form" onSubmit={handleSubmit}>
                            <input className="login2-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className="login2-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="login2-button" type="submit">Login</button>
                        </form>
                    </div>
                    <div className='image-container2'>
                        <img className='image-login' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login2;

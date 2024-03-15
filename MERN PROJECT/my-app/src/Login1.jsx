import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login1.css'

const Login1 = ({ setIsLoggedIn, setUserId }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { Username: username, Password: password });
            console.log('Login success:', response.data);

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);

            setIsLoggedIn(true);
            setUserId(response.data.userId);

            if (response.data.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/bookingdetails');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('incorrrect username or password');
        }
    }

    return (
        <div className="mainbg3">
            <div className='bgcolor3'>
                <div className="login3-container">
                    <div className="login3-form-container">

                        <h1 className="login3-title">Login</h1>

                        <div className="logo-containers">
                            <i class="fa-brands fa-whatsapp fa-2x" style={{ color: "#000000" }}></i>
                            <i class="fa-brands fa-square-facebook fa-2x" style={{ color: "#000000" }}></i>
                            <i class="fa-brands   fa-twitter fa-2x" style={{ color: "#000000" }}></i>
                            <i class="fa-brands     fa-instagram fa-2x " style={{ color: "#000000" }}></i>
                        </div>
                        <h6 className="user-pass">use your username and password</h6>

                        {error && <p className="error-message">{error}</p>}
                        <form className="login3-form" onSubmit={handleSubmit}>


                            <input className="custom-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className="custom-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />


                            <button className="no-account">  <h6><Link to="/signup" style={{ textDecoration: "none", color: "black" }}>Dont have an account?</Link></h6></button>

                            <button className="login3-button" type="submit">Login</button>
                        </form>
                    </div>
                    <div className="halfdiv"></div>
                    <h2 className="hello-freind">Hello,Friend!</h2>
                    <h6 className="register-account">Register Your New Account</h6>
                    <button className="qwer"><Link to="/signup" style={{ textDecoration: "none", color: "white" }}> SignUp</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Login1;
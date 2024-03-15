import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup1.css'

function Signup1() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adhaarNumber, setAdhaarNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [place, setPlace] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', {
                Name: name,
                Username: username,
                Email: email,
                Password: password,
                AdhaarNumber: adhaarNumber,
                PhoneNumber: phoneNumber,
                Place: place
            });
            setSuccess('Signup successful!');
            setError('');

            
            navigate('/login2'); 

        } catch (error) {
            setError(error.response.data.error);
            setSuccess('');
        }
    };

    return (
        <div className='mainbg1'>
            <div className='bgcolor'>

                <div className="container">
                    <div className="signup-box">
                        <h1>Sign Up</h1>
                        <h6>Please signup to continue out website</h6>
                        {error && <p>{error}</p>}
                        {success && <p>{success}</p>}
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="text" placeholder="Adhaar Number" value={adhaarNumber} onChange={(e) => setAdhaarNumber(e.target.value)} required />
                            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                            <input type="text" placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} required />
                            <button style={{ backgroundColor: "white", boxShadow: "none" }}><Link style={{ textDecoration: "none", backgroundColor: "transparent", color: "black", fontWeight: "700", height: "10px" }} to='/login2'> Already have an account?</Link></button>

                            <button type="submit">Sign Up</button>
                            <h4>Login with social media</h4>
                            <div className='ic'>
                                <i class="fa-brands fa-facebook  fa-2x" style={{ color: "#000000" }}></i>
                                <i class="fa-brands fa-whatsapp  fa-2x" style={{ color: "#000000" }}></i>
                                <i class="fa-brands fa-instagram  fa-2x" style={{ color: "#000000" }}></i>
                            </div>


                        </form>
                    </div>
                    <div className="image-container">
                        <img className='image-signup' />
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Signup1;

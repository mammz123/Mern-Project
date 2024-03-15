import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home1 from './Home1';
import About1 from './About1';
import Contact1 from './Contact1';
import Naav1 from './Naav1';

import Login1 from './Login1';
import Booking1 from './Booking1';
import Signup1 from './Signup1';
import Admin1 from './Admin1';
import BookingDetails from './BookingDetails'; 
import Edit1 from './Edit1';
import Login2 from './Login2';
import Portfolio from './Portfolio';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [userId, setUserId] = useState(localStorage.getItem('userId')); 

    return (
        <div>
            <BrowserRouter>
                <Naav1 />
                <Routes>
                    <Route index element={<Home1 />} />
                    <Route path="/home" element={<Home1 />} />
                    <Route path="/about" element={<About1 />} />
                    <Route path="/contact" element={<Contact1 />} />
                    <Route path="/login" element={<Login1 setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />} />
                    <Route path="/booking" element={<Booking1 />} />
                    <Route path="/signup" element={<Signup1 />} />
                    <Route path="/admin" element={<Admin1 />} />
                    <Route path="/bookingdetails" element={<BookingDetails userId={userId} />} /> 
                    <Route path="/edit/:id" element={<Edit1 />} />
                    <Route path="/login2" element={<Login2  setIsLoggedIn={setIsLoggedIn} setUserId={setUserId}/>}/>
                    <Route path="/portfolio" element={<Portfolio />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
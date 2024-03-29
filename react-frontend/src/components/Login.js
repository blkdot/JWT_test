// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [token, setToken] = useState('');

    const handleLogin = async () => {
        const response = await axios.post('http://localhost:5000/login', {
            username: 'admin',
            password: 'password'
        });
        setToken(response.data.token);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {token && <p>Token: {token}</p>}
        </div>
    );
};

export default Login;
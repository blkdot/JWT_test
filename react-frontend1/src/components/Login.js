import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [token, setToken] = useState('');

    const getLoginInfo = async () => {
        const response = await axios.get('http://localhost:5000/getlogin');
        setToken(response.data.getToken);
    };

    return (
        <div>
            <button onClick={getLoginInfo}>GetLogin</button>
            {token && <p>Token: {token}</p>}
        </div>
    );
};

export default Login;
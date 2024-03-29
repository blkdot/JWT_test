// App.js
import React from 'react';
import Login from '../src/components/Login';

const App = () => {
    // const handleProtected = async () => {
    //     const token = ''; // Set the token received after login
    //     const response = await axios.get('http://localhost:5000/protected', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });
    //     console.log(response.data);
    // };

    return (
        <div>
            <Login />
            {/* <button onClick={handleProtected}>Access Protected Route</button> */}
        </div>
    );
};

export default App;
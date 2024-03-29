// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const secretKey = 'YourSecretKey';
var getToken;

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, secretKey);
        getToken = token;
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route
app.get('/getLogin', (req, res) => {
    console.log(getToken);
    res.json({ getToken });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
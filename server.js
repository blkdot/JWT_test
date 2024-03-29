// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const secretKey = 'YourSecretKey';

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route
app.get('/protected', (req, res) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }
    
    const token = authorizationHeader.split(' ')[1];
    
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json({ message: 'Access granted' });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
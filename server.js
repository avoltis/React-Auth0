const express = require('express');
require('dotenv').config();

const app = express();

app.get('/public', function (req, res) {
    debugger;
    res.json({
        message: 'Hello from public API'
    });
});

app.listen(3001);
console.log('API Server listening on ' + process.env.REACT_APP_API_URL);
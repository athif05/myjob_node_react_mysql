const express = require('express');
const cors = require('cors');
const connection = require('./db/config');
const app = express();

app.get('/', (req, res)=>{
    res.send('Node is working...');
});

app.listen(12345);
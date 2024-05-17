'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
res.send('Der Weg ist das Ziel, bald am Ende! Habe ich gedacht... one more job, falsch gedacht, final job');
});
app.listen(PORT, HOST);
console.log(`Running on
http://${HOST}:${PORT}`);
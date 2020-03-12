const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 3001;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

http.listen(port, ()=> {
    console.log("server started at", port);
});
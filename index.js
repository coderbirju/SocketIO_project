const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 3001;
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

const data = {};

io.on('connection', (socket) => {
    console.log("user connected");
    setTimeout(function() {
        socket.emit('testerEvent', {description: 'Sent a message 4seconds after connection!'});
     }, 4000);

     socket.on('disconnect', function () {
        console.log('A user disconnected');
     });
     
     socket.on('Client:', (msg)=> {
        console.log(msg);
        data.message = msg;
     });

     socket.emit('DataEmit', data);
});

http.listen(port, ()=> {
    console.log("server started at", port);
});
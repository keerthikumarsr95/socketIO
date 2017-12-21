const socketIO = require('socket.io');
const express = require('express');
const http = require('http')
const port = process.env.PORT || 8000;
require('./server2');
const app = express();

const server = http.createServer(app)
global.io = socketIO(server);
const helper = require('./utils/serverhelper');

// io.on('connection', (socket)=>{
//     console.log('new user Connected')
//     global.custSocket = socket;    

//     // socket.emit('newMessage', 'keerthi');
    
//     socket.on('createMessage', (payload, id)=>{
//         console.log(payload, id)
//     });
    
//     socket.on('disconnect', ()=>{
//         console.log('disconnected');
//     });
// });

// module.exports = socketHelper;

server.listen(port, ()=>console.log(`Listening on port ${port}`));

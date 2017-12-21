import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
socket.on('connect', () => console.log('connected to socket'));
socket.on('disconnect', ()=> console.log('disconnected'));

const newEmail = (cb) =>{
    socket.on('newMessage', (email)=>{
        console.log('new Email',email);        
        cb(email);
    });
}

const newrequest = (message)=>{
    socket.emit('createMessage',message, socket.id);
}
export { newEmail, newrequest }
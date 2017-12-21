

io.on('connection', (socket) => {
    socket.on('createMessage', (payload, id) => {
        console.log(payload, id)
    });
    
    socket.on('disconnect', () => {
        console.log('disconnected');
    });
    
    setTimeout(() => {    
        socket.emit('newMessage', {name: 'k'})
    }, 500); 
        setTimeout(() => {
        socket.emit('newMessage', {name: 'ke'})    
    }, 1000);
    
    setTimeout(() => {
        socket.emit('newMessage', {name: 'kee'})    
    }, 2000);

    setTimeout(() => {
        socket.emit('newMessage', {name: 'keer'})    
    }, 3000);

    setTimeout(() => {
        socket.emit('newMessage', {name: 'keerth'})    
    }, 4000);

    setTimeout(() => {
        socket.emit('newMessage', {name: 'keerthi'})    
    }, 5000 );
});
const net = require('net');
const port = 3000;


const server = net.createServer(function(socket) {
});

let sockets = []
server.on('connection', (socket) => {
    console.log(`CONNECTED: ${socket.remoteAddress}:${socket.remotePort}`)
    sockets.push(socket)
    socket.on('data', (data) => {
        console.log(`Server got: ${data}\nFrom: ${socket.remoteAddress}:${socket.remotePort}`)
        socket.write(data)
    })

    socket.on('error', (error) => {
        console.log(`${error} - ${new Date()}`)
    })

    socket.on(`close`, () => {
        console.log(`Closing connection with ${socket.remoteAddress}:${socket.remotePort} - ${new Date()}`)
    })

})

server.listen(port, '127.0.0.1', () => {
    console.log(`Server listening on ${port}\n`)
});

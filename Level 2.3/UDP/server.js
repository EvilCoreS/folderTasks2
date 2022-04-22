let dgram = require('dgram')

const server = dgram.createSocket('udp4');
server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, info) => {
    console.log(`Server got: ${msg} - ${info.address}:${info.port} - ${new Date()}`);
    server.send(msg, info.port, "localhost", function (error){
        if (error){
            console.log(error)
        }
    })
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening ${address.address}:${address.port}`);
});

server.bind(3000);
const http = require('http')

const port = 3000;

const server = http.createServer()

server.on('request', ((req, res) => {
    req.on('data', (message) => {
        console.log(`Server got: ${message.toString()}\nFrom: ${req.socket.remoteAddress} ${new Date()}`)
        res.write(message.toString())
    })
})).listen(port,() => {
    console.log(`Server running at ${port}`)
})

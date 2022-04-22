const net = require('net');
console.time('timeOffFunc')
const client = new net.Socket();
const port = 3000;
const host = '127.0.0.1';
const text = '123'
client.connect(port, host, function() {
    console.log('Connected');
    client.write(text);
});
client.on('data', function(data) {
    console.log(data.toString());
    console.timeEnd('timeOffFunc')
});
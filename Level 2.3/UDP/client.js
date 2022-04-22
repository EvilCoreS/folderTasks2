let udp = require('dgram')

let client = udp.createSocket('udp4')

const data = '123'
console.time('timeOffFunc')

client.send(data, 3000, 'localhost', function (error){
    if (error){
        console.log(error)
        client.close();
    }
    else {
        console.log(`Data: ${data} - Success!`)
    }
})

client.on('message', (msg) => {
    console.log(`Response: ${msg.toString()}`)
    console.timeEnd('timeOffFunc')
})
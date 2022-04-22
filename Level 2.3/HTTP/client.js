const http = require('http');

const options = {
    host: 'localhost',
    method: 'POST',
    port: 3000,
};

console.time('timeOffFunc')

const text = '123';

let request = http.request(options, (res) => {

    res.on('data', (chunk) => {
        console.log(chunk.toString())
        console.timeEnd('timeOffFunc')
    });
});

request.write(text)

request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});
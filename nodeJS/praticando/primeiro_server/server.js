const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola Mundo')
});

server.listen(hostname, port, () => {
    console.log(`Servidor rodando em http://${hostname}/${port}/`)
});


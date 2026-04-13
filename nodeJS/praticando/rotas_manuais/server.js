const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const rotas = [
    { url: '/', title: 'Home' },
    { url: '/sobre', title: 'Pagina Sobre' },
    { url: '/contato', title: 'Pagina Contato' }
];

const server = createServer((req, res) => {
    const { method, url } = req;

    const rota = rotas.find((rota) => url === rota.url);

    if (rota && url === rota.url && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>{rota.title}</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 - Pagina nao encontrada</h1>');
        res.end();
    }
});

server.listen(hostname, port, () => {
    console.log(`Servidor rodando em http://${hostname}/${port}/`);
});
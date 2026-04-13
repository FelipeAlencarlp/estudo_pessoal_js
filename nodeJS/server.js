const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const rotas = [
    { url: '/', method: 'GET', title: 'Home' },
    { url: '/sobre', method: 'GET', title: 'Pagina Sobre' },
    { url: '/contato', method: 'GET', title: 'Pagina Contato' },
];

const server = createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const contentType = { 'Content-Type': 'text/html' };

    const rota = rotas.find((rota) => rota.url === url);

    if (rota && url === rota.url && method === rota.method) {
        res.writeHead(200, contentType);
        res.write(`<h1>${rota.title}</h1>`);
        res.end();
    } else {
        res.writeHead(404, contentType);
        res.write('<h1>404 - Pagina nao encontrada</h1>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const rotas = [
    { url: '/', title: 'Home' },
    { url: '/sobre', title: 'Pagina Sobre' },
    { url: '/contato', title: 'Pagina Contato' },
    { url: '/usuarios', title: 'Listando Usuarios' },
];

const server = createServer((req, res) => {
    const { method, url } = req;
    const contentText = { 'Content-Type': 'text/html' };
    const contentJson = { 'Content-Type': 'application/json' };

    const rota = rotas.find((rota) => rota.url === url);

    if (rota && url === rota.url && method === 'GET') {
        res.writeHead(200, contentText);
        res.write(`<h1>${rota.title}</h1>`);
        res.end();
    } else if (url === '/usuarios' && method === 'POST') {
        let body = [];

        req
            .on('error', err => {
                console.error(err);
                res.statusCode(400);
                res.end();
            })
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                res.writeHead(200, contentJson);
                res.end(JSON.stringify({
                    mensagem: 'POST recebido com sucesso',
                    dadosRecebidos: parsedBody
                }));
            } catch (error) {
                res.writeHead(400, contentJson);
                res.end(JSON.stringify({ erro: 'JSON inválido' }));
            }
        });
    } else {
        res.writeHead(404, contentText);
        res.write('<h1>404 - Pagina nao encontrada</h1>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
const { createServer } = require('node:http');
const {
    getUsuarios,
    postUsuarios,
    deleteUsuario
} = require('./routes/routes');

const hostname = '127.0.0.1';
const port = 3000;

const rotas = [
    { url: '/', titulo: 'Página Principal'},
    { url: '/usuarios', titulo: 'Lista de Usuários'}
];

// servidor
const server = createServer((req, res) => {
    const { method, url } = req;

    // para utilizar diferentes rotas
    const rota = rotas.find((rota) => url === rota.url);
    
    // Define a rota base e usa regex para capturar o parâmetro opcional /usuarios/:id?
    const userRouteMatch = url.match(/^\/usuarios(?:\/([^\/]+))?$/);

    if (rota || userRouteMatch) {
        if (method === 'GET') {
            getUsuarios(res, url, rota, userRouteMatch);

        } else if (method === 'POST') {
            postUsuarios(req, res);

        } else if (method === 'DELETE') {
            deleteUsuario(res, userRouteMatch);
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Pagina nao encontrada</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
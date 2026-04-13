const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

let usuarios = [
    { id: 1, nome: 'Felipe'},
    { id: 2, nome: 'Ana'},
];

const rotas = [
    { url: '/', titulo: 'Página Principal'},
    { url: '/usuarios', titulo: 'Lista de Usuários'}
];

// servidor
const server = createServer((req, res) => {
    const { method, url } = req;
    const contentText = { 'Content-Type': 'text/html; charset=utf-8' };
    const contentJson = { 'Content-Type': 'application/json' };

    // para utilizar diferentes rotas
    const rota = rotas.find((rota) => url === rota.url);

    const buscarUsuario = (id) => 
        usuarios.find((u) => u.id === id);
    
    const listarUsuarios = (res) => {
        res.writeHead(200, contentText);
        res.write(`<h1>${rota.titulo}</h1>`);

        for (let u of usuarios) {
            res.write(`<p>ID: ${u.id}</p>`);
            res.write(`<p>NOME: ${u.nome}</p>`);
        }

        res.end();
    };

    const usuarioEncontrado = (res, usuario) => {
        res.writeHead(200, contentText);
        res.write('<h1>Usuário Encontrado</h1>')
        res.write(`<p>ID: ${usuario.id}</p>`);
        res.write(`<p>NOME: ${usuario.nome}</p>`);
        res.end();
    };

    const deletarUsuario = (id) => 
        usuarios = usuarios.filter((u) => u.id !== id);

    // Define a rota base e usa regex para capturar o parâmetro opcional /usuarios/:id?
    const userRouteMatch = url.match(/^\/usuarios(?:\/([^\/]+))?$/);

    if (rota || userRouteMatch) {
        if (method === 'GET') {
            if (url === '/usuarios') {
                listarUsuarios(res);
            } else if (userRouteMatch) {
                const id = Number(userRouteMatch[1]);
                const usuario = buscarUsuario(id);

                if (usuario) {
                    usuarioEncontrado(res, usuario);
                } else {
                    res.writeHead(404, contentText);
                    res.end('<p>Usuário não encontrado</p>');
                }
            } else {
                res.writeHead(200, contentText);
                res.write(`<h1>${rota.titulo}</h1>`);
                res.end();
            }

        } else if (method === 'POST') {
            let body = [];

            req
                .on('error', err => {
                    console.log(err);
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

                        usuarios.push({
                            id: usuarios.length + 1,
                            nome: parsedBody[0]?.nome
                        });

                    } catch (error) {
                        res.writeHead(400, contentJson);
                        res.end(JSON.stringify({ erro: 'JSON inválido.' }));
                    }
                });

        } else if (method === 'DELETE') {
            if (userRouteMatch) {
                try {
                    const id = Number(userRouteMatch[1]);
                    const usuario = buscarUsuario(id);
                    
                    if (usuario) {
                        res.writeHead(200, contentJson);
                        deletarUsuario(id);
                        res.end(JSON.stringify({
                            mensagem: 'Usuário DELETADO com sucesso',
                        }));
                    } else {
                        res.writeHead(404, contentJson);
                        res.end(JSON.stringify({
                            mensagem: 'Usuário não encontrado'
                        }));
                    }
                } catch (error) {
                    res.writeHead(400, contentJson);
                    res.end(JSON.stringify({ erro: 'JSON inválido.' }));
                }
            }
        }
    } else {
        res.writeHead(404, contentText);
        res.end('<h1>404 - Pagina nao encontrada</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
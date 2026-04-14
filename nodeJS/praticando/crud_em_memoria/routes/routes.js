const {
    buscarUsuario,
    criarUsuario,
    deletarUsuario
} = require('../controllers/usuarioController');
const usuarios = require('../database/usuarios');

const contentText = { 'Content-Type': 'text/html; charset=utf-8' };
const contentJson = { 'Content-Type': 'application/json' };

const getUsuarios = (res, url, rota, userRouteMatch) => {
    if (url === '/usuarios') {
        res.writeHead(200, contentText);
        res.write(`<h1>${rota.titulo}</h1>`);
        for (let u of usuarios) {
            res.write(`<p>ID: ${u.id}</p>`);
            res.write(`<p>NOME: ${u.nome}</p>`);
        }
        res.end();

    } else if (userRouteMatch) {
        const id = Number(userRouteMatch[1]);
        const usuario = buscarUsuario(id);

        if (usuario) {
            res.writeHead(200, contentText);
            res.write('<h1>Usuário Encontrado</h1>')
            res.write(`<p>ID: ${id}</p>`);
            res.write(`<p>NOME: ${usuario.nome}</p>`);
            res.end();
        } else {
            res.writeHead(404, contentText);
            res.end('<p>Usuário não encontrado</p>');
        }

    } else {
        res.writeHead(200, contentText);
        res.write(`<h1>${rota.titulo}</h1>`);
        res.end();
    }
};

const postUsuarios = (req, res) => {
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
                const parsedBody = JSON.parse(Buffer.concat(body).toString());

                res.writeHead(200, contentJson);
                res.end(JSON.stringify({
                    mensagem: 'POST recebido com sucesso',
                    dadosRecebidos: parsedBody
                }));

                criarUsuario(parsedBody[0]?.nome);

            } catch (error) {
                res.writeHead(400, contentJson);
                res.end(JSON.stringify({ erro: 'JSON inválido.' }));
            }
        });
};

const deleteUsuario = (res, userRouteMatch) => {
    if (userRouteMatch) {
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
    }
};

module.exports = {
    getUsuarios,
    postUsuarios,
    deleteUsuario
};
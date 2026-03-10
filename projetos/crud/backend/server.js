const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const usuario = {
        id: Date.now(),
        ...req.body
    };

    usuarios.push(usuario);

    res.json(usuario);
});

app.put('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.telefone = req.body.telefone;

    res.json(usuario);
});

app.delete('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    usuarios = usuarios.filter(u => u.id !== id);

    res.json({ mensagem: 'Usuário removido.' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
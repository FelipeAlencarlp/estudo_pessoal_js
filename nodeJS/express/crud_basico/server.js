const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para ler JSON no body

let usuarios = [
    {id: 1, nome: 'Felipe'},
    {id: 2, nome: 'Ana'}
];

app.get('/usuarios', (req, res) => {
    if (usuarios.length > 0) {
        res.status(200).send(usuarios);
    } else {
        res.status(200).send('Lista de usuários vazia');
    }
});

app.get('/usuarios/:id', (req, res) => {
    try {
        const { id } = req.params;
        const usuario = usuarios.find((u) => u.id === Number(id));

        if (usuario) {
            res.status(200).send(`ID: ${usuario.id} | NOME: ${usuario.nome}`);
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    } catch (error) {
        res.status(400).send();
        console.log(error);
    }
});

app.post('/usuarios', (req, res) => {
    try {
        const { nome } = req.body[0];

        if (!nome && !nome.trim()) {
            res.status(404).send('Nome do usuário é obrigatório.');
        } else {
            usuarios.push({
                id: Date.now(),
                nome
            });
    
            res.status(201).send('Usuário criado com sucesso.');
        }
    } catch (error) {
        res.status(400).send();
        console.log('Deu erro', error);
    }
});

app.delete('/usuarios/:id', (req, res) => {
    try {
        const { id } = req.params;
        const usuario = usuarios.find((u) => u.id === Number(id));

        if (usuario) {
            usuarios = usuarios.filter((u) => u.id !== Number(id));
        
            res.status(200).send('Usuário deletado com sucesso!');
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    } catch (error) {
        res.stasus(400).send();
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${3000}`);
})
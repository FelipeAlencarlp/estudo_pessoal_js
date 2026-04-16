const usuarios = require('../database/usuarios');

const listarUsuarios = (req, res) => {
    if (usuarios.length > 0) {
        res.status(200).send(usuarios);
    } else {
        res.status(200).send('Lista de usuários vazia');
    }
};

const buscarUsuario = (req, res) => {
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
};

const criarUsuario = (req, res) => {
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
};

const deletarUsuario = (req, res) => {
    try {
        const { id } = req.params;
        const index = usuarios.findIndex((u) => u.id === Number(id));

        if (index !== -1) {
            usuarios.splice(index, 1);
        
            res.status(200).send('Usuário deletado com sucesso!');
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    } catch (error) {
        res.stasus(400).send();
        console.log(error);
    }
};

module.exports = {
    listarUsuarios,
    buscarUsuario,
    criarUsuario,
    deletarUsuario
};
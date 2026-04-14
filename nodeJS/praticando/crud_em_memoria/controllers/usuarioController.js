const usuarios = require('../database/usuarios');

const contentText = { 'Content-Type': 'text/html; charset=utf-8' };

const buscarUsuario = (id) => 
    usuarios.find((u) => u.id === id);

const criarUsuario = (nome) =>
    usuarios.push({
        id: Date.now(),
        nome
    });

const deletarUsuario = (id) => {
    const index = usuarios.findIndex((u) => u.id === id);

    if (index !== -1) {
        usuarios.splice(index, 1);
    }
}

module.exports = {
    buscarUsuario,
    criarUsuario,
    deletarUsuario
};
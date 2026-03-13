// Onde fica o grupo de rotas (server.js vai conectar tudo)
// Não existe lógica aqui, as requisições que chegam Routes chama Controller
const express = require('express');
const router = express.Router(); // Router sistema re rotas do express

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.listarUsuarios);

router.get('/:id', usuariosController.buscarUsuario);

router.post('/', usuariosController.criarUsuario);

router.put('/:id', usuariosController.atualizarUsuario);

router.delete('/:id', usuariosController.deletarUsuario);

module.exports = router;

/*
    Route define qual controller será executado para cada endpoint da API
*/
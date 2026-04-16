const express = require('express');
const router = express.Router();
const {
    listarUsuarios,
    buscarUsuario,
    criarUsuario,
    deletarUsuario
} = require('../controllers/usuarioController');

router.get('/usuarios', (req, res) => {
    listarUsuarios(req, res);
});

router.get('/usuarios/:id', (req, res) => {
    buscarUsuario(req, res);
});

router.post('/usuarios', (req, res) => {
    criarUsuario(req, res);
});

router.delete('/usuarios/:id', (req, res) => {
    deletarUsuario(req, res);
});

module.exports = router;
// Onde recebe a requisição e decide o que fazer (não guarda dados)
// Recebe requicição -> chama service -> retorna resposta
// Não deve conter lógica pesada
const usuariosService = require('../services/usuariosService');
const asyncHandler = require('../middlewares/asyncHandler');

const listarUsuarios = asyncHandler(async (req, res) => {
    const usuarios = await usuariosService.listarUsuarios();

    res.json(usuarios);
});

const criarUsuario = asyncHandler(async (req, res) => {
    const usuario = await usuariosService.criarUsuario(req.body);

    res.status(201).json(usuario);
});

const atualizarUsuario = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);

    const usuarioAtualizado = await usuariosService.atualizarUsuario(id, req.body);

    if (!usuarioAtualizado) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    res.json(usuarioAtualizado);
});

const deletarUsuario = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);

    const removido = await usuariosService.deletarUsuario(id);

    if (!removido) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    res.json({ mensagem: 'Usuário removido.' });
});

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};

/*
    Controller é responsável por orquestrar a requisição.
*/
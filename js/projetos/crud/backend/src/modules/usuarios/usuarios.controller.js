// Onde recebe a requisição e decide o que fazer (não guarda dados)
// Recebe requicição -> chama service -> retorna resposta
// Não deve conter lógica pesada
const usuariosService = require('./usuarios.service');
const asyncHandler = require('../../middlewares/asyncHandler');
const { successResponse } = require('../../utils/response');
const AppError = require('../../utils/AppError');

const listarUsuarios = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const filtros = {
        nome: req.query.nome,
        email: req.query.email
    };

    const { data, total } = await
        usuariosService.listarUsuarios(page, limit, filtros);

    const totalPages = Math.ceil(total / limit);

    successResponse(res, data, 200, {
        pagination: {
            page,
            limit,
            total,
            totalPages
        }
    });
});

const buscarUsuario = asyncHandler(async (req, res) => {
    const usuario = await usuariosService.buscarPorId(Number(req.params.id));

    if (!usuario) {
        throw new AppError('Usuário não encontrado', 404);
    }

    successResponse(res, usuario);
});

const criarUsuario = asyncHandler(async (req, res) => {
    const usuario = await usuariosService.criarUsuario(req.body);

    successResponse(res, usuario);
});

const atualizarUsuario = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);

    const usuarioAtualizado = await usuariosService.atualizarUsuario(id, req.body);

    if (!usuarioAtualizado) {
        throw new AppError('Usuário não encontrado.', 404);
    }

    successResponse(res, usuarioAtualizado);
});

const deletarUsuario = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);

    const removido = await usuariosService.deletarUsuario(id);

    if (!removido) {
        throw new AppError('Usuário não encontrado.', 404);
    }

    successResponse(res, { mensagem: 'Usuário removido.' })
});

module.exports = {
    listarUsuarios,
    buscarUsuario,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};

/*
    Controller é responsável por orquestrar a requisição.
*/
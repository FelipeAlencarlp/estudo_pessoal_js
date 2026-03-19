const Joi = require('joi');

const criarUsuarioSchema = Joi.object({
    nome: Joi.string()
        .min(3)
        .max(100)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    telefone: Joi.string()
        .min(14)
        .max(14)
        .required()
});

module.exports = {
    criarUsuarioSchema
};
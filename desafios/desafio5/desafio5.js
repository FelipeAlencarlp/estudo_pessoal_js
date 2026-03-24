/*
    Controller + Service + Error Flow
    Objetivo:
        Transformar a função em algo parecido com um endpoint real:
            separar responsabilidades
            simular req/res
            usar throw + middleware

        Estrutura:
            user
            |---user.controller.js
            |---user.service.js
            |---user.routes.js (simulado)
*/

const { getUsersController } = require('./user/user.controller');

const req = {
    query: {
        nome: 'a',
        page: 1,
        limit: 2,
        sortBy: 'email',
        order: 'desc'
    }
};

const res = {
    status(code) {
        this.statusCode = code;
        return this;
    },
    json(data) {
        console.log('RESPONSE:', {
            status: this.statusCode,
            body: data
        });
    }
};

function next(err) {
    console.log('ERROR MIDDLEWARE:', err.message);
}

getUsersController(req, res, next);
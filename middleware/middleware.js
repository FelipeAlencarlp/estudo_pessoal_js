/*
    1. O que é Middleware?
        No Express, middleware é uma função que intercepta a requisição
        antes da resposta.

        Fluxo simplificado:
            Request
            \/
            Middleware
            \/
            Route
            \/
            Controller
            \/
            Response

        Exemplo simples:
            app.use((req, res) => {
                console.log('Requisição recebida!')
                next()    
            })

        Explicando:
            req -> dados da requisição
            res -> resposta
            next() -> manda continuar o fluxo
        - se não chamar next(), a requisição trava

    2. O problema que temos hoje
        Imagine que no controller aconteça erro:
            const usuarios = await usuariosService.listarUsuarios()

        Se o banco falhar no PostgresSQL, pode acontecer:
            UnhandledPromiseRejection
            ou
            API crash
        - por isso usamos tratamento centralizado de erro.

    3. Criando middleware global de erro
        src/middleware
            errorMiddleware.js
                function errorMiddleware(err, req, res, next) {
                    console.log('Erro:', err)

                    res.status(500).json({
                        erro: 'Erro interno do servidor'
                    })
                }

                module.exports = errorMiddleware

        Agora vem a regra importante do Express.
        Midleware de erro tem 4 parâmetros:
            (err, req, res, next)

        -Isso faz o Express reconhecer ele como error handler.

    4. Conectando middleware no server
        No server.js:
            const errorMiddleware = require('.middlewares/errorMiddleware');

        E no final do arquivo:  
            app.use(errorMiddleware);
        **IMPORTANTE:
            Sempre por ultimo!

        Fluxo agora fica:
            Request
            \/
            Routes
            \/
            Controllers
            \/
            Erro acontece
            \/
            errorMiddleware
            \/
            Resposta JSON

    6. Problema que ainda existe
        Mesmo assim você teria que fazer em todo controller:
            try {
                ...
            } catch (err) {
                next(err) 
            }
        
        Isso fica feio e repetitivo

        Exemplo:
            listarUsuarios
            criarUsuarios
            editarUsuarios
            deletarUsuarios

        Todos com try/catch

    7. Solução profissional: asyncHandler

        Crie outro arquivo
            src/middlewares/asyncHandler.js
                function asyncHandler(fn) {
                    return function(req, res, next) {
                        Promise.resolve(fn(req, res, next))
                        .catch(next)
                    }
                }

                module.exports = asyncHandler

            Agora é só envolver o controller com ele

    8. Exemplo no controller
        Antes:
            async function listarUsuarios(req, res) {
                const usuarios = await usuariosService.listarUsuarios()
                res.json(usuarios)
            }

        Agora:
            const asyncHandler = require('../middlewares/asyncHandler')

            const listarUsuarios = asyncHandler(async (req, res) => {
                const usuarios = await usuariosService.listarUsuarios()
                
                res.json(usuarios)
            })

        Se der erro:
            asyncHandler -> captura o erro
            \/
            errorMiddleware
            \/
            resposta JSON

    O fluxo agora ficou PROFISSIONAL
        Frontend
        \/
        Route
        \/
        Controleer (asyncHandler)
        \/
        Service
        \/
        PostgreSQL
        \/
        erro?
        \/
        errorMiddleware
        \/
        JSON de erro
*/
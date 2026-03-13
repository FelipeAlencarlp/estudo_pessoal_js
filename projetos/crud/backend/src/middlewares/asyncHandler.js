function asyncHandler(fn) {
    return function(req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}

module.exports = asyncHandler;

/*
    Funções de ordem superior e closures
        asyncHandler -> função de ordem superior
            - recebe uma função
            - e retorna outra função
        -* muito comum em Express.js

        Estrutura simplificada:
            asyncHandler
                \/ recebe
            controller
                \/ retorna
            nova função que envolve o controller

    Função retornada:
        return function(req, res, next)

        - Essa é a função que o Express espera com essa assinatura

    Promise.resolve(fn(req, res, next))
        Quando executa -> fn(req, res, next)
        -É a mesma coisa que executar o controller

    Por que usar Promise.resolve()
        - Porque nem toda função retorna Promise automaticamente.
        - Então Promise.resolve()
            garante que o resultado sempre será trada como Promise.

    Catch(next)
        Se qualquer erro acontecer:
            throw new Error(...)
            ou
            erro no await
*/
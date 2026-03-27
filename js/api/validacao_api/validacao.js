/*
    Uma das partes mais importantes de qualquer API profissional:
        Validação de dados

    Isso evita problemas como:
        nome: ""
        email: "abc"
        idade: -10

    Sem validação, a API aceita qualquer coisa e envia para o banco
    Com validação, a API bloqueia dados inválidos antes de chegar no controller.

    APIs feitas com Express.js normalmente fazem isso com bibliotecas de schema.

    As duas mais famosas são:
        - Joi -> boa para projetos com JS puro
        - Zod

    No terminal:
        npm install joi

    Criar pasta de validações
        Nova estrutura:
            src
                |- controllers
                |- services
                |- routes
                |- middlewares
                |- utils
                |- validations
                    |- usuarioValidation.js
    
*/
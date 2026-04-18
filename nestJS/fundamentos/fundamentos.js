/*
    O NestJS é um framework backend para Node.js que impõe estrutura
    e organização - algo que no Express é preciso montar manualmente.

    Ele é fortemente inspirado em arquitetura de frameworks como Angular.

    IDEIA CENTRAL
        NestJS usa:
            - Arquitetura modular
            - Injeção de dependência
            - Separação de responsabilidades

    Comparação com Express: 
        No Express, normalmente faz:
            - Rotas + lógica + validação + tudo misturado

        No NestJS, isso é separado:
            Responsabilidade    NestJS
            ----------------------------------
            Rotas               Controllers
            ----------------------------------
            Regra de negócio    Services
            ----------------------------------
            Organização         Modules
            ----------------------------------
            Validação           DTO + Pipes


    Estrutura mental do NestJS
        Request -> Controller -> Service -> (Banco, lógica, etc)

        - Controllers
        -> Recebem a requisição (igual às rotas do Express)

        - Services
        -> Contêm a lógica (regras de negócio)

        - Modules
        -> Organizam tudo (agrupam controllers + services)

    Conceito MAIS IMPORTANTE: Injeção de Dependências
        No Express:
            - É criado tudo manualmente

        No Nest:
            - O framework cria e injeta automaticamente o que
                preciso

        Isso permite:
            - Código desacoplado
            - Mais testável
            - Mais escalável


    Controller vs Service:
        Controller: 
            - Recebe requisição HTTP
            - Define rotas (GET, POST, etc)
            - Extrai dados da requisição (params, body, query)
            - Chama o Service

        Service:
            - Contém a lógica de negócio
            - Não sabe nada de HTTP
            - Pode ser reutilizado em vários controllers

        Regra simples:
            Controller = entrada/saida
            Service = cérebro

    Module
        - Agrupa partes da aplicação (controllers + services)
        - Define o que pode ser usado dentro dele
        - Controla injeção de depedência

        -> Sem module, o Nest não consegue conectar as peças

    ---------------------------------------------------------------

    Nest CLI:
        Use o comando 'nest g resource nome-aqui' para gerar
        automaticamente a estrutura completa de CRUD,
        incluindo pastas de DTOs e arquivos base.
*/
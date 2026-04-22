/*
    JWT = JSON Web Token

    É um padrão para:
        Identificar usuários de forma segura
        sem guardar sessão no servidor

    Como funciona (fluxo real)
        1. Usuário faz login:
            POST /auth/login
            email -> senha

        2. Backend valida
        3. Backend gera um token (JWT)
        4. Cliente recebe:
            { acess_token: "..." }
        5. A cada requisição:
            Authorization: Bearer <token>
        6. Backend valida o token (Guard)

    O que tem dentro de um JWT?
        3 partes:
            HEADER.PAYLOAD.SIGNATURE

        Payload (o que importa pra você)
            Contém dados como:
                - id do usuário
                - email
                -> não é criptografado (apenas codificado)

        Por que isso é poderoso?
            - Não precisa salvar sessão no backend
            - Escalável
            - Padrão de mercado

    Conecetando com o que já foi aprendido
        Conceito        Papel no JWT
        -----------------------------------
        Controller      recebe login
        -----------------------------------
        Service         valida usuário
        -----------------------------------
        DTO             valida dados
        -----------------------------------
        Guard           protege rotas
        -----------------------------------
        Interceptor     formata resposta

        -> Tudo começa a fazer sentido agora

    Perguntas importantes:
        -> Por que o Guard depende do AuthService?
            - O Guard depende do AuthService porque ele
              precisa validar o token, e quem conhece os
              tokens válidos é o AuthService.

        -> O que muda quando coloco 'request.user'
            - Permite que qualqer parte da aplicação
            (controller, service) saiba quem está fazendo
            a requisição.

        -> Por que isso importa para rotas futuras?
            - Permite implementar regaras como:
                - buscar dados do usuários logado
                - verificar permissões
                - associar ações a um usário
*/
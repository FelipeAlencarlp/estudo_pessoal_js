/*
    Um Guard é uma classe anotada com o decorador @Injectable(),
    que implementa a CanActivate interface.

    É responsável por:
        - decidir se a requisição pode ou não continuar
        -> Ele funciona como um porteiro da aplicação

    Função real do Guard:
        Ele não valida formato (isso é Pipe)
        Ele não processa lógica (isso é Service)

        Ele apenas responde:
            Pode entrar? -> true / false

    Fluxo real do Nest (isso é MUITO importante)
        Request
        \/
        Guards          <- (bloqueia ou libera)
        \/
        Pipes           <- (valida/transforma dados)
        \/
        Controller
        \/
        Service
        \/
        Response
        
    Ou seja:
        Guard roda ANTES de tudo.

    O que o Guard enxerga:
        Diferente do Pipe, o Guard tem acesso a:
            - Headers
            - Request completo
            - Rota que está sendo chamada
            - Contexto da execução

        Isso acontece via:
            - ExecutionContext

    Guard vs Pipe (diferença clara)
        Conceito        Função
        ---------------------------------------
        Guard           Decide se entra ou não
        ---------------------------------------
        Pipe            Valida/transforma dados

    Exemplo direto:
        - Guard: "tem token válido?" -> entra ou não
        - Pipe: "id é número?" -> ajusta ou erro
*/
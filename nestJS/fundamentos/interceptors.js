/*
    Interceptores
        São classes anotadas com @Injectable() que implementam
        a interface 'NestInterceptor', permitindo interceptar,
        transformar, monitorar ou substituir o fluxo de requisição/resposta
        (antes e depois do handler).
        Inspirados na Programação Orientada a Aspectos (AOP),
        eles centralizam lógica comum.

    Forma como o Interceptor "pega" o retorno:
        O next.handle() retorna um Observable com o resultado do controller.
        O map() intercepta esse fluxo e transforma o dado
        antes de ser enviado na response

        Ou seja:
            - Controller retorna algo
            - Interceptor captura esse retorno
            - Modifica
            - Envia ao cliente

    Momento em que o interceptor atua no fluxo:
        - Antes: quando chama next.handle()
        - Depois: quando o Observable retorna (via map())

    Pode alterar request?
        - Interceptor é mais usado para response
        - Para request, geralmente usa-se:
            Pipes (validação)
            Guards (autorização)

    Visão de pipeline com interceptor:
        Request
        \/
        Guards
        \/
        Pipes
        \/
        Interceptor (antes)
        \/
        Controller
        \/
        Service
        \/
        Interceptor (depois)
        \/
        Response


    IMPORTANTE:
        NO NEST SEMPRE USAR:
            throw new HttpException(...)
            -> para tratar erros

*/
/*
    O que é um Pipe?
        Definição: Classes com o decorador @Injectable()
                   que interceptam os dados antes de chegarem ao controller.

        Função: Transformação (ex: converter string para número)
                ou Validação (ex: verificar se o email é válido).

        Exemplo: ValidationPipe, ParseIntPipe, ParseUUIDPipe.

        Uso: Aplicado em rotas (@UsePipes()) ou globalmente (app.useGlobalPipes()).

    Pipe implementa PipeTransform
        Pode:
            - transformar dados (ex: string -> number)
            - validar dados (lançando exceção)

        Ponto importante:
            | Pipes atuam em parâmetros específicos
            | (route, params, body, query) ou globalmente.

    PIPES RODAM DEPOIS DO ROTEAMENTO, MAS ANTES DO MÉTODO DO CONTROLLER
*/
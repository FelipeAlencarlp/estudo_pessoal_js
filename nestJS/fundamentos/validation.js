/*
    Para utilizar validação, é preciso ser dentro de DTOs

    instalar via terminal:
        npm i --save class-validator class-transformer

    Seguir a documentação para saber quais tipos de validações
    tem disponivel e utilizar como Decorador @.
        https://docs.nestjs.com/techniques/validation

    Importante:
        A validação não deve acontecer no Controller e sim no DTO
        Pois:
            Além de responsabilidade:
                - Evita repetição de código
                - Centraliza validação
                - Permite reaproveitamento
                - Mantém o controller limpo

        O Momento da validação acontece antes do método do controller se
        executado, durante o pipeline da requisição.
*/
/*
    Por que paginação é importante?
        Quando:
            SELECT * FROM tabela;
        Problema:
            Se tiver 10 mil usuários trava tudo!

        Com paginação:
            Controlo:
                - quantos dados vem
                - performance da API
                - expriência do frontend

        Conceito:   
            page:
                - é qual página eu quero

            limit:
                - quantos registros por página

        Exemplo:
            page = 1
            limit = 10
            -> usuários 1 ao 10

            page = 2
            limit 10
            -> usuários 11 ao 20

        Utilizando no PostgreSQL:
            LIMIT 10 OFFSET 10
        
            Fórmula do OFFSET:
                OFFSET = (page - 1) * limit

            Exemplo:
                page = 2
                limit = 10

                OFFSET = (2 - 1) * 10 = 10
*/
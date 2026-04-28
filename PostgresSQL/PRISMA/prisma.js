/*
    Conceito - ORM
        Prisma
            ORM = mapear tabelas -> objetos

        Tradução mental
            Antes (SQL):
                SELECT * FROM users;

            Agora (ORM):
                prisma.user.findMany();

        Relação:
            SQL         ORM
            ---------------------------------
            SELECT      findMany / findUnique
            ---------------------------------
            INSERT      create
            ---------------------------------
            UPDATE      update
            ---------------------------------
            DELETE      delete
            ---------------------------------
            JOIN        include / relation
            ---------------------------------
            GROUP BY    aggregate


        Estrutura do Prisma
            Arquivo principal:
                schema.prisma

            Onde defino:
                - modelos (tabelas)
                - relacionamentos
                - regras

        Conceito - Model
            Exemplo mental:
                model User {
                    id Int
                    name String
                }
            -> Isso vira uma tabela no banco
*/
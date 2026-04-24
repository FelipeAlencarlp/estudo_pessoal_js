/*
    Conceito - JOIN

        Serve para juntar tabelas através de relacionamento

        Modelo mental
            Tenho:
                users
                id  name
                ----------
                1   Felipe
                2   Ana

                orders
                id  user_id total
                -------------------
                1   1       500
                2   1       300
                3   2       1000

            Relação:
                - 'orders.user_id' -> aponta para 'users.id'
                - Isso é uma Foreign Key

            O que o JOIN faz
                Ele conecta:
                    users.id = orders.user_id

            Resultado:
                user    total
                ---------------
                Felipe  500
                Felipe  300
                Ana     1000

        Tipos principais
            - INNER JOIN -> tras só quem tem relação
            - (outros vêm depois)


    MODELO MENTAL DEFINITIVO DE JOIN
        Guarde:
            SELECT
            FROM tabela_base
            JOIN outra_tabela ON condição
            WHERE filtro
            GROUP BY (se tiver agregação)
            ORDER BY


        TRADUÇÂO PARA BACKEND:
            Isso:
                JOIN users -> orders

            Vira:
                user.orders

            Em:
                - Prisma
                - TypeORM
*/
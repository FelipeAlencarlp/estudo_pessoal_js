/*
    Conceito - Index
        Íncide é uma estrutura que acelera buscas.

        Modelo mental
            Sem índice:
                | banco lê linha por linha (lento)
        
            Com índice:
                | banco usa "atalho" (rápido)

        Exemplo
            SELECT * FROM users WHERE email = 'x@email.com';

            Sem índice -> varre tudo
            Com índice -> busca direto

        Regra simples:
            -> Crie índice para colunas usadas em:
                - WHERE
                - JOIN
                - ORDER BY

        Exemplos práticos
            1. Buscar usuário por email (LOGIN)
                SELECT * FROM users WHERE email = 'felipe@email.com';

                -> Use índice em 'email'
                    -> Sem índice:
                        - varre tabela inteira

                    -> Com índice
                        - acesso direto (muito mais rápido)

            2. JOIN entre tabelas
                SELECT *
                FROM orders o
                JOIN users u ON u.id = o.user_id

                -> Indice em 'orders.user_id'
                    -> Porque:
                        - JOIN depende dessa coluna
                
            3. Buscar pedidos de um usuário
                SELECT * FROM orders WHERE user_id = 1;

                -> Índice em 'user_id'
                    -> Muito comum em:
                        - /users/1/orders

            4. Ordenação (ORDER BY)
                SELECT * FROM products ORDER BY price DESC;

                -> Índice em 'price'
                    -> Especialmente útil se:
                        - tabela grande
                        - paginação (LIMIT)

            5. Índice composto
                CREATE INDEX ON orders (user_id, total);

                -> Isso ajuda quando faço:
                    SELECT *
                    FROM orders
                    WHERE user_id = 1
                    ORDER BY total DESC;

                    -> O banco já tem:
                        - filtro + ordenação no mesmo índice


        QUANDO NÂO USAR ÍNDICE
            1. Tabela pequena
                - 10, 50, 100 registros -> irrelevante

            2. Coluna pouco usada
                Se você nunca filtra por ela -> inútil
            
            3. Coluna com poucos valores únicos
                Exemplo:
                    status = 'ativo' ou 'inativo'
                    -> índice quase não ajuda

            4. Muitas escritas (INSERT/UPDATE)
                Cada índice:
                    - precisa ser atualizado
                    - deixa escrita mais lenta

        REGRA DE OURO
            | Índice acelera leitura, mas custa escrita

        COMO PENSAR?
            Antes de criar índice, pergunte:
                1. Essa coluna é usada em filtro?
                2. Essa coluna participa de JOIN?
                3. Essa consulta acontece muito?

            Se sim -> índice


        Insight importante
            Índice composto:
                (user_id, total)

                Funciona para:
                    - WHERE users_id = X
                    - WHERE user_id = X ORDER BY total

                Não funciona para:
                    - WHERE total = X (sem user_id)

                    -> Ordem importa
*/
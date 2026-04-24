/*
    Desafio 1 - JOIN

        Tabelas users e orders

        Missão
            1. Buscar todos os pedidos com o nome do usuário
            2. Buscar apenas pedidos do usuário Felipe
            3. Mostrar:
                - nome do usuário
                - total gasto por ele

            4. Mostrar usuários que fizeram pedidos acima de 400
            5. Contar quantos pedidos cada usuário fez
*/


/*
    Buscar todos os pedidos com o nome do usuário

    SELECT u.name
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id;
*/

/*
    Buscar apenas pedidos do usuário Felipe

    SELECT u.name
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    WHERE name = 'Felipe';
*/

/*
    Mostrar:
        - nome do usuário
        - total gasto por ele

    SELECT u.name, SUM(o.total) AS total_gasto
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY total_gasto DESC;
*/

/*    
    Mostrar usuários que fizeram pedidos acima de 400

    SELECT DISTINCT u.id, u.name
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    WHERE o.total > 400;
*/

/*
    Contar quantos pedidos cada usuário fez

    SELECT
        u.id,
        u.name,
        COUNT(o.id) AS total_pedidos
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY total_pedidos DESC;
*/
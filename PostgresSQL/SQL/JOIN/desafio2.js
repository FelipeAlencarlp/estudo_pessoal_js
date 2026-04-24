/*
    Desafio 2 - Fixação JOIN

    Missão:
        1. Buscar:
            - nome do usuário
            - total do pedido
        2. Buscar:
            - nome do usuário
            - quantidade de pedidos
        3. Buscar:
            - nome do usuário
            - maior pedido que ele fez
        4. Buscar:
            - nome do usuário
            - média dos pedidos
*/

/*
    Buscar:
        - nome do usuário
        - total do pedido

    SELECT u.name, o.total
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id;
*/

/*
    Buscar:
        - nome do usuário
        - quantidade de pedidos

    SELECT u.name, COUNT(o.id) AS total_pedidos
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY total_pedidos DESC;
*/

/*
    Buscar:
        - nome do usuário
        - maior pedido que ele fez

    SELECT u.name, MAX(o.total) AS maior_pedido
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY maior_pedido DESC;
*/

/*
    Buscar:
        - nome do usuário
        - média dos pedidos

    SELECT u.name, AVG(o.total) AS media_pedidos
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY media_pedidos DESC;
*/
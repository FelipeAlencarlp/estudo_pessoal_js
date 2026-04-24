/*
    Desafio 1 - DELETE

        Tabela users
        Missão:
            1. Deletar usuário com id = 3
            2. Deletar usuários com idade menor que 18
            3. Deletar todos os usuários
            4. Deletar usuário com id = 2 e retornar:
                - id
                - email
            5. Deletar usuários com nome "Usuário Teste", mas
               limitar a apenas 1 registro
*/

/*
    Deletar usuário com id = 3
    DELETE FROM users WHERE id = 3;
*/

/*
    Deletar usuários com idade menor que 18
    DELETE FROM users WHERE age < 18;
*/

/*
    Deletar todos os usuários
    TRUNCATE TABLE users;
    (nunca utilizar)
*/

/*
    Deletar usuário com id = 2 e retornar:
        - id
        - email

    DELETE FROM users WHERE id = 2 RETURNING *;
    -> RETURNING * -> Retorna tudo, mas posso limitar:
                        RETURNING id, email;
*/

/*
    Deletar usuários com nome "Usuário Teste", mas
    limitar a apenas 1 registro

    DELETE FROM users
    WHERE id = (
        SELECT id
        FROM users
        WHERE name = 'Usuário Teste'
        LIMIT 1
    )
*/


/*
    PONTO CHAVE APRENDIDO
        - Subquery precisa ser compatível com o contexto
        - DELETE não tem LIMIT direto -> você resolve com subquery
*/
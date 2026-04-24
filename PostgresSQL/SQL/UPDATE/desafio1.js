/*
    Desafio 1 - UPDATE
        Tabela users

        Missão:
            1. Atualizar a idade do usuário com id = 1 para 30
            2. Atualizar o email do usuário "Ana"
            3. Aumentar em +1 a idade de todos os usuários
            4. Atualizar o nome para "Usuário Teste", apenas
               para usuários com idade menor que 18
            5. Atualizar o email e retornar:
                * id
                * email atualizado
*/


/*
    Atualizar a idade do usuário com id = 1 para 30

    UPDATE users
    SET age = 30
    WHERE id = 1;
*/


/*
    Atualizar o email do usuário "Ana"

    UPDATE users
    SET email = 'aninha@email.com'
    WHERE name = 'Ana';
*/


/*
    Aumentar em +1 a idade de todos os usuários

    UPDATE users
    SET age = age + 1;
*/


/*
    Atualizar o nome para "Usuário Teste", apenas
    para usuários com idade menor que 18

    UPDATE users
    SET name = 'Usuário Teste'
    WHERE age < 18;
*/


/*
    Atualizar o email e retornar:
        * id
        * email atualizado
    
    UPDATE users
    SET email = 'teste@email.com'
    WHERE id = 2
    RETURNING id, email;
*/


/*
    PONTO IMPORTANTE:
        Foi usado:
            - atualização direta
            - atualização condicional
            - atualização baseada no próprio valor (age = age + 1)
            - retorno com RETURNING
        
        Isso é exatamente o fluxo de:
            - PUT / PATCH em APIs
*/
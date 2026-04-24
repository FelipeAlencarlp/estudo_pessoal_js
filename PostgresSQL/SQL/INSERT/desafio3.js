/*
    Desafio 8 - fechando INSERT
        Missão:
            1. Inserir um usuário e ignorar se o email já existe
            2. Inserir um usuário e, se o email já existir,
               atualizar o nome
            3. Inserir um usuário retornando:
                * id
                * email
*/


/*
    Inserir um usuário e ignorar se o email já existe

    INSERT INTO users (name, email, age)
    VALUES ('Felipe', 'felipe@email.com', 30)
    ON CONFLICT (email)
    DO NOTHING;
*/

/*
    Inserir um usuário e, se o email já existir, atualizar o nome

    INSERT INTO users (name, email, age)
    VALUES ('João', 'joao@email.com', 40)
    ON CONFLICT (email)
    DO UPDATE SET name = EXCLUDED.name;

    ** 
        EXCLUDED representa os dados que tentei inserir
        Muito usado com ORMs por baixo
    **
*/

/*
    Inserir um usuário retornando:
        * id
        * email
    
    INSERT INTO users (name, email, age)
    VALUES ('Orlando', 'orlando@email.com', 50)
    RETURNING id, email;
*/
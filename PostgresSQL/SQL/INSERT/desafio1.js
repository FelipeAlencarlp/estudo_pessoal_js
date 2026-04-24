/*
    Desafio 1 - INSERT - início
        Tabela users:
            | id | name | email | age |

        Missão:
            Escreva queries para:
                1. Inserir um usuário com:
                    + name: João
                    + email: joao@email.com
                    + age: 28
                2. Inserir 2 usuários de uma vez:
                    + Maria, maria@email.com, 22
                    + Pedro, pedro@email.com, 35
                3. Inserir um usuário informando apenas name e email
*/

/*
    Inserir um usuário com:
        + name: João
        + email: joao@email.com
        + age: 28

    INSERT INTO users (name, email, age)
    VALUES ('João', 'joao@email.com', 28);
*/

/*
    Inserir 2 usuários de uma vez:
        + Maria, maria@email.com, 22
        + Pedro, pedro@email.com, 35

    INSERT INTO users (name, email, age)
    VALUES ('Maria', 'maria@email.com', 22),
           ('Pedro', 'pedro@email.com', 35)
*/


// Inserir um usuário informando apenas name e email
// INSERT INTO users (name, email) VALUES ('Felipe', 'felipe@email.com');


/*
    CONEXÃO COM BACKEND
        Isso vira:
            * POST /users
            * body:
                {
                    "name": "João",
                    "email": "joao@email.com",
                    "age": 28
                }
            E o banco executa exatamente esse INSERT
*/
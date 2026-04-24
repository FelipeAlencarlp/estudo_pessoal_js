/*
    Desafio 1:
        Imagine a seguinte tabela:
            Tabela: users

            id  name    email                   age
            ----------------------------------------
            1   Felipe  felipe@email.com        25
            ----------------------------------------
            2   Ana     ana@email.com           18
            ----------------------------------------
            3   Carlos  carlos@email.com        30
            ----------------------------------------
            4   Maria   maria@email.com         22

    Missão:
        Escreva queries SQL para:
            1. Buscar todos os usuários
            2. Buscar apenas name e email
            3. Buscar usuários com idade maior que 18
            4. Buscar usuário com id = 2
            5. Buscar usuários com idade entre 18 e 25

    Regars:
        * Não copie da internet diretamente
        * Pense como o SQL lê:
            * "o que eu quero?" -> SELECT
            * "de onde?" -> FROM
            * "com condição?" -> WHERE 
*/

// Buscar todos os usuários
// SELECT * FROM users;

// Buscar apenas name e email
// SELECT name, email FROM users;

// Buscar usuários com idade maior que 18
// SELECT * FROM users WHERE age > 18;

// Buscar usuário com id = 2
// SELECT * FROM users WHERE id = 2;

// Buscar usuários com idade entre 18 e 25
// SELECT * FROM users WHERE age BETWEEN 18 AND 25;


/*
    CONEXÂO COM BACKEND (NODE/NESTJS)
        Essas queries viram coisas como:
            * GET /users -> SELECT *
            * GET /users/:id -> WHERE id = ?
            * GET /users?age=18 -> filtros com WHERE
*/
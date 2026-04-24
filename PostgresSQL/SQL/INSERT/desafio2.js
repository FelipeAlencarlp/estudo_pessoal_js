/*
    Desafio 2 - Insert (nivel real)
        Missão:
            1. Inserir um usuário com:
                * name: Ana
                * email: ana@email.com
                * age: NULL
            2. Inserir um usuário sem informar colunas
               (dica: depende da ordem da tabela)
            3. Inserir um usuário e retornar o id criado
            4. Inserir um usuário, mas garantindo que:
                * o email seja único
                  (dica: isso não é só INSERT -- envolve estrutura da tabela)
*/

/*
    Inserir um usuário com:
        * name: Ana
        * email: ana@email.com
        * age: NULL
    
    INSERT INTO users (name, email, age)
    VALUES ('Ana', 'ana@email.com', NULL);
*/


/*
    Inserir um usuário sem informar colunas
    (dica: depende da ordem da tabela)

    INSERT INTO users 
    VALUES (DEFAULT, 'Felipe', 'felipe@email.com', 20);
*/


/*
    Inserir um usuário e retornar o id criado
    
    INSERT INTO users (name, email, age)
    VALUES ('Marta', 'marta@email.com', 20)
    RETURNING id;
*/


/*
    Inserir um usuário, mas garantindo que:
        * o email seja único
        (dica: isso não é só INSERT -- envolve estrutura da tabela)

        Criar primeiro a tabela com email unico:
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                age INTEGER
            );

            INSERT INTO users (name, email)
            VALUES ('Felipe', 'felipe@email.com')
            ON CONFLICT (email) DO NOTHING;
*/
/*
    Desafio 1 - Foreign Key modelagem real

        Missão
            1. Criar tabela 'users' com:
                - id (auto incremento)
                - name

            2. Criar tabela 'orders' com:
                - id
                - user_id
                - total

                E definir:
                    - 'user_id' como Foreign Key
                    - Referenciando 'users(id)

            3. Definir comportamento:
                - Se usuário for deletado -> deletar pedidos juntos

            4. Inserir: 
                - 1 usuário
                - 2 pedidos para esse usuário

            5. Tentar inserir:
                - pedido com 'user_id' inexistente
                -> entender o que acontece

*/


/*
    1. Criar tabela 'users' com:
        - id (auto incremento)
        - name

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100)
    );
*/

/*
    2. Criar tabela 'orders' com:
        - id
        - user_id
        - total

        E definir:
            - 'user_id' como Foreign Key
            - Referenciando 'users(id)'

    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        total DECIMAL
    );
*/

/*
    3. Definir comportamento:
        - Se usuário for deletado -> deletar pedidos juntos
    
    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        total DECIMAL
    );
*/

/*
    4. Inserir: 
        - 1 usuário
        - 2 pedidos para esse usuário

    PRIMEIRA OPÇÂO:

        BEGIN;

        WITH novo_usuario AS (
            INSERT INTO users (name)
            VALUES ('Felipe')
            RETURNING id
        )

        INSERT INTO orders (user_id, total)
        SELECT id, 500 FROM novo_usuario
        UNION ALL
        SELECT id, 1000 FROM novo_usuario;

        COMMIT;

    SEGUNDA OPÇÂO:
        INSERT INTO users (name) VALUES ('Felipe');

        INSERT INTO orders (user_id, total)
        VALUES (1, 500), (1, 1000);
*/

/*
    5. Tentar inserir:
        - pedido com 'user_id' inexistente
        -> entender o que acontece

    INSERT INTO orders (user_id, total)
    VALUES (999, 200);

    Erro de Violação de Chave Estrangeira: 
        O PostgreSQL impedirá a operação e emitirá um
        erro 23503 (violation of foreign key constraint).
    Mensagem de Erro Padrão:
        A mensagem será similar a: ERROR:
            insert or update on table "tabela_filha"
            violates foreign key constraint "nome_da_fk".
    Detalhamento do Erro:
        O Postgres indicará explicitamente o motivo,
        por exemplo: Key (id_pai)=(999) is not present in table "tabela_pai".
    Integridade Referencial:
        Essa restrição garante que não existam "registros órfãos",
        mantendo a consistência dos dados, ou seja,
        um registro filho não pode existir sem um pai correspondente.
*/
/*
    Desafio 1 - INDEX
        Missão
            1. Criar um índice para a coluna email na tabela users
            2. Criar um índice composto:
                - (user_id, total) na tabela orders
            3. Pensar (sem código): -> em quais casos o índice acima será útil?
            4. Pensar: -> Por que não criar índice em TODAS as colunas?       
*/


/*
    Criar um índice para a coluna email na tabela users

    CREATE INDEX email_index ON users (email); 
*/

/*
    Criar um índice composto:
        - (user_id, total) na tabela orders

    CREATE INDEX orders_multcoluns_index ON orders (user_id, total);
*/

/*
    Pensar (sem código): -> em quais casos o índice acima será útil?

    Quando preciso realizar multiplas consultas para obter a informação,
    o single-columms não oferece um bom desempenho, nesse caso, torna-se
    necessário a utilização de indices de multiplas colunas
*/

/*
    Pensar: -> Por que não criar índice em TODAS as colunas?

    A desvantagem encontrada é que os dados são adicionados de forma
    mais lenta com base nos índices criados, principalmente quando
    desejamos inserir dados em duas tabelas diferentes,
    devido a reorganização dos índices.
    Contudo, é necessário tomar cuidado ao criarmos os índices,
    pois estes não podem ser gerados para qualquer dado,
    pois isso faria com que a pesquisa se tornasse mais demorada.
*/
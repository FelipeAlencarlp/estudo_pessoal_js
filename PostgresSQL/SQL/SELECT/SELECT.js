/*
    SELECT -- o mais importante
        SELECT é usado para buscar dados.
        Ele será a base de praticamente tudo no backend:
            * Listar usuários
            * Buscar produto por ID
            * Filtrar pedidos
        
        SELECT BASE
            SELECT
            WHERE
            ORDER BY
            LIMIT
            LIKE
            COUNT
            Funções agregadas completas
            Alias
            DISTINCT
            Subqueries (base leve)

    
    CONCEITO -- Funções agregadas
        Funções agregadas operam sobre conjunto de linhas:
            * COUNT() -> quantidade
            * SUM() -> some
            * AVG() -> média
            * MAX() -> maior valor
            * MIN() -> menor valor
            
            *-> IMPORTANTE: Elas resumem dados, não retornam linhas completas.

    CONCEITO -- Alias
        Posso renomear colunas:
            SELECT COUNT(*) AS total_users;

        Muito usado em APIs:
            * deixa o retorno mais claro
            * evita nomes genéricos

    CONCEITO -- DISTINCT
        Remove duplicados:
            SELECT DISTINCT age FROM users;
*/
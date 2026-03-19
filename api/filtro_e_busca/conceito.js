/*
    Não pode ser feito:
        SELECT * FROM  usuarios WHERE nome = 'felipe';

    Pois os filtros mudam.

    Então precisa de:
        SQL DINÂMICO

    Usando ILIKE (PostgreSQL)
        Para busca:
            nome ILIKE '%felipe%'

        Isso permite:
            Felipe
            felipe
            FELIPE
*/
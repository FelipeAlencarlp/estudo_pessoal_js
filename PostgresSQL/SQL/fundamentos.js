/*
    Conceito - Banco de Dados Relacional

        Um banco relacional organiza dados em tabela (linhas e colunas).

            * Tabela -> estrutura (ex: users)
            * Linha (row) -> um registro (um usuário)
            * Coluna (column) -> um atributo (nome, email)
        
        O Ponto central é o relacionamento entre tabelas:
            -> Uma tabela pode se conectar a outra através de chaves:
                * Primary Key (PK) -> identifica um registro único
                * Foreign Key (FK) -> aponta par aoutro registro em outra
                                      tabela
                        
            -> Isso permite modelar coisas reais:
                * Usuário -> faz pedidos
                * Pedido -> tem produtos

--------------------------------------------------------------------------------

    Como o PostgreSQL funciona
        PostgreSQL é um SGBD relacional.
        Na prática ele:
            1. Armazena dados em tabelas
            2. Executa comandos SQL (linguagem de consulta)
            3. Garante integridade (ex: não deixar FK inválida)
            4. Permite consultas complexas (JOIN, GROUP, etc.)

        Interajo via SQL:
            * Ler dados -> SELECT
            * Inserir -> INSERT
            * Atualizar -> UPDATE
            * Deletar -> DELETE

--------------------------------------------------------------------------------


*/
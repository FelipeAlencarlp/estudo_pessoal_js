/*
    Conceito - GROUP BY
        Agrupa registros para aplicar agragações.

        Exemplo mental:
            "quantos usuários por idade?"
        -> agrupo por 'age' e uso 'COUNT'

        A cláusula GROUP BY no PostgreSQL agrupa linhas
        com valores idênticos em colunas específicas,
        permitindo o resumo de dados através de funções de agregação
        como COUNT(), SUM(), AVG(), MAX() ou MIN().
        Ela é colocada após a cláusula WHERE e antes de ORDER BY,
        sendo essencial para relatórios.


    EXPLICAÇÂO PARA GUARDAR:
        Pense assim:
            GROUP BY = "juntar iguais e resumir"

        Visual mental
            Tabela:
                age
                ---
                20
                20
                25
                25
                30

            Passo 1 - GROUP BY age
                Agrupa:
                    20 -> [20, 20]
                    25 -> [25, 25]
                    30 -> [30]

            Passo 2 - aplicar função
                Exemplo COUNT(*):
                    20 -> 2
                    25 -> 2
                    30 -> 1

            Resultado final
                age     count
                --------------
                20      2
                25      2
                30      1

        REGRA DE OURO
            Se uso:
                GROUP BY age
            -> Tudo no SELECT deve ser:
                - ou age
                - ou função agregada (COUNT, AVG, etc.)

    WHERE vs HAVING (essencial)
        - WHERE -> filtra linhas antes do agrupamento
        - HAVING -> filtra grupos depois do agrupamento

    RESUMO FINAL
        - GROUP BY agrupa dados iguais
        - Funções agregadas resumem esses grupos
        - HAVING filtra grupos
        - ORDER BY organiza o resultado final
*/
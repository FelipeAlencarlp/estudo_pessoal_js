/*
    Desafio 1 - GROUP BY

        Tabela users:
            id  name    age
            ----------------
            1   A       20
            ----------------
            2   B       20
            ----------------
            3   C       25
            ----------------
            4   D       25
            ----------------
            5   E       30

        Missão:
            1. Contar quantos usuários existem por idade
            2. Mostrar a idade e a média de idade por grupo
               (sim, parece estranho -- pensa)
            3. Mostrar apenas idades onde existem mais de 1 usuário
            4. Contar quantos usuários existem por idade,
               ordenando do maior grupo para o menor
            5. Mostrar a idade com maior quantidade de usuários
*/


/*
    Contar quantos usuários existem por idade

    SELECT age, COUNT(*) AS total_usuarios
    FROM users
    GROUP BY age;
*/

/*
    Mostrar a idade e a média de idade por grupo
    (sim, parece estranho -- pensa)

    SELECT age, AVG(age)
    FROM users
    GROUP BY age;
*/

/*
    Mostrar apenas idades onde existem mais de 1 usuário

    SELECT age, COUNT(*) AS total_usuarios -> seleciona e conta quantos tem para cada
    FROM users
    GROUP BY age -> agrupa os registros com a mesma idade
    HAVING COUNT(*) > 1; -> filtra e retorna somente os que são maior que 1
*/

/*
    Contar quantos usuários existem por idade,
    ordenando do maior grupo para o menor

    SELECT age, COUNT(*) AS total_usuarios
    FROM users
    GROUP BY age
    ORDER BY total_usuarios DESC;
*/

/*
    Mostrar a idade com maior quantidade de usuários

    SELECT age, COUNT(*) AS total_usuarios
    FROM users
    GROUP BY age
    ORDER BY total_usuarios DESC
    LIMIT 1;
*/
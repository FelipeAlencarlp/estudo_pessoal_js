/*
    Desafio 2 (nível acima - SELECT avançado)
        Usando a mesma tabela users.
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
            Escreva queries para:
                1. Buscar usuários ordenados por idade (mais velho primeiro)
                2. Buscar os 2 usuários mais novos
                3. Buscar usuários cujo nome começa com "M"
                4. Buscar usuários cujo email contém "gmail"
                5. Contar quantos usuários existem na tabela

        Dicas:
            * Ordenação -> palavra-chave específica
            * Limitar resultados -> muito usuado em APIs (paginação)
            * Buscar por padrão de texto -> operador especial
            * Contagem -> função
 */

// Buscar usuários ordenados por idade (mais velho primeiro)
// SELECT * FROM users ORDER BY age DESC;

// Buscar os 2 usuários mais novos
// SELECT * FROM users ORDER BY age ASC LIMIT 2

// Buscar usuários cujo nome começa com "M"
// SELECT * FROM users WHERE name LIKE 'M%';

// Buscar usuários cujo email contém "gmail"
// SELECT * FROM users WHERE email LIKE '%gmail%';

// Contar quantos usuários existem na tabela
// SELECT COUNT(*) FROM users;


/*
    Conceito importante que apareceu aqui
        LIKE -> busca por padrão de texto
            * 'M%' -> começa com M
            * '%gmail%' -> contém gmail
            * '%@gmail.com' -> termina com gmail
        Isso é MUITO usado em busca (ex: filtros em APIs)
*/
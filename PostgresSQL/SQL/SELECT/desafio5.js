/*
    Desafio 5 - último do SELECT base
        Tabela products

        Missão:
            1. Buscar o preço médio apenas dos produtos acima de 500
            2. Contar quantos produtos têm nome "Mouse"
            3. Buscar o maior preço apenas dos produtos com nome contendo "o"
            4. Listar os preços únicos (sem repetição)
            5. Buscar a média dos preços, mas apenas dos 3 produtos mais baratos
*/

// Buscar o preço médio apenas dos produtos acima de 500
// SELECT AVG(price) FROM products WHERE price > 500;

// Contar quantos produtos têm nome "Mouse"
// SELECT COUNT(*) FROM products WHERE name = 'Mouse';

// Buscar o maior preço apenas dos produtos com nome contendo "o"
// SELECT MAX(price) FROM products WHERE name LIKE '%o%';

// Listar os preços únicos (sem repetição)
// SELECT DISTINCT price FROM products;

// Buscar a média dos preços, mas apenas dos 3 produtos mais baratos
/*
    SELECT AVG(price) AS media_3_mais_barato
    FROM (
        SELECT price
        FROM products
        ORDER BY price ASC
        LIMIT 3
    ) AS subquery;
*/
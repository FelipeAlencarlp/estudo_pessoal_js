/*
    Desafio 3 (Transição para modelagem real)
        Nova tabela:
            products
            id  name        price
            ----------------------
            1   Notebook    3500
            ----------------------
            2   Mouse       100
            ----------------------
            3   Teclado     200
            ----------------------
            4   Monitor     1200

        Missão:
            Escreva queries para:
                1. Buscar produtos com preço maior que 500
                2. Buscar produtos ordenados por preço
                   (mais barato primeiro)
                3. Buscar o produto mais caro
                4. Buscar produtos com nome contendo "o"
                5. Contar quantos produtos têm preço acima de 1000
*/

// Buscar produtos com preço maior que 500
// SELECT * FROM products WHERE price > 500;

// Buscar produtos ordenados por preço (mais barato primeiro)
// SELECT * FROM products ORDER BY price ASC;

// Buscar o produto mais caro
// SELECT * FROM producs ORDER BY price DESC LIMIT 1;

// Buscar produtos com nome contendo "o"
// SELECT * FROM products WHERE name LIKE '%o%';

// Contar quantos produtos têm preço acima de 1000
// SELECT COUNT(*) FROM products WHERE price > 1000;
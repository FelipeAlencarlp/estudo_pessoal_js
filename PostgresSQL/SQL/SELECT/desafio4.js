/*
    Desafio 4 - continuação correta do SELECT

        Usando a tabela products:
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
            1. Retornar o preço médio dos produtos
            2. Retornar a soma total dos preços
            3. Retornar o menor preço
            4. Contar quantos produtos existem e nomear como 'total_products'
            5. Listar os nomes únicos de produtos (sem repetição)
            6. Retornar o maior preõ com nome de coluna 'highest_price'
*/

// Retornar o preço médio dos produtos
// SELECT AVG(price) AS avg_price FROM products;

// Retornar a soma total dos preços
// SELECT SUM(price) AS total_price FROM products;

// Retornar o menor preço
// SELECT MIN(price) AS min_price FROM products;

// Contar quantos produtos existem e nomear como 'total_products'
// SELECT COUNT(*) AS total_products FROM products;

// Listar os nomes únicos de produtos (sem repetição)
// SELECT DISTINCT name FROM products;

// Retornar o maior preço com nome de coluna 'highest_price'
// SELECT MAX(price) AS highest_price FROM products;

/*
    Diferença entre Agregação (valor) e Registro completo:
        Agregação (valor)
        MAX(price)

        Registro completo
        ORDER BY + LIMIT
*/
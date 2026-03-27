/*
Dado:
    let produtos = [
        {nome: 'Notebook', preco: 3000},
        {nome: 'Mouse', preco: 100},
        {nome: 'Teclado', preco: 200}
    ];

Desafio 1:
    Use MAP para criar um array só com os nomes.
    Resultado esperado:
        ['Notebook', 'Mouse', 'Teclado']

Desafio 2:
    Use FILTER para pegar apenas produtos com preço maior que 150.

Desafio 3:
    Use REDUCE para calcular o total dos produtos.
    Resultado esperado:
        3300
*/

let produtos = [
    {nome: 'Notebook', preco: 3000},
    {nome: 'Mouse', preco: 100},
    {nome: 'Teclado', preco: 200}
];

// Desafio 1
let nomesProdutos = produtos.map(p => p.nome);
console.log(nomesProdutos); // ['Notebook', 'Mouse', 'Teclado']

// ------------------------------------------------------------

// Desafio 2
let maior150 = produtos.filter(p => p.preco > 150);
console.log(maior150);
// [{ nome: 'Notebook', preco: 3000 }, { nome: 'Teclado', preco: 200 }]

// ------------------------------------------------------------

// Desafio 3
let valorTotal = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log(valorTotal); // 3300
/*
- Desafio 1:
    Crie uma função que recebe um número e retorne o dobro dele

- Desafio 2:
    Crie uma função que receba:
        - nome
        - idade
    E retorne:
        "Meu nome é X e tenho Y anos"

- Desafio 3:
    Crie uma função que receba um array de números e retorne a soma total
    usando REDUCE

- Desafio 4:
    Crie uma função que:
        - receba um array de notas;
        - retorne a média;
        - se o array estiver vazio, retorn "Sem notas."
*/

// Desafio 1
const dobro = (numero) => numero * 2;
console.log(dobro(4));

// ------------------------------------------------

// Desafio 2
const pessoa = (nome, idade) => 
    `Meu nome é ${nome} e tenho ${idade} anos.`;

console.log(pessoa('Felipe', 32));

// ------------------------------------------------

// Desafio 3
const somaTotal = (numeros) => {
    if(!numeros.length) return `A lista está vazia.`;
    
    const soma = numeros.reduce((acc, n) => acc + n, 0);
    return `A soma total dos números passado é: ${soma}`;
}
console.log(somaTotal([1, 2, 3, 4, 5]));

// ------------------------------------------------

// Desafio 4
const mediaAluno = (notas) => {
    if (!notas.length) return `Sem notas.`;

    const total = notas.reduce((acc, n) => acc + n, 0);
    return total / notas.length;
}
console.log(mediaAluno([5, 8, 10, 7]));
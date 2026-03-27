// Não altera o array original
// Map = Transformar

// Usado para quando quero transformar cada item do array.

// Exemplo:
let numeros = [1,2,3,4];
let dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2,4,6,8]

// Aqui aconteceu que foi pego cada número e aplicou uma transformação
// com isso ele retornou um novo array com as modificações esperadas.

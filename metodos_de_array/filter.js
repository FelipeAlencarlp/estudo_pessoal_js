// Usado para quando quero manter apenas alguns valores
// Filter = Filtrar

let numeros = [1,2,3,4,5,6];
let pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4, 6]

// Aqui é mantido só quem retorna true.
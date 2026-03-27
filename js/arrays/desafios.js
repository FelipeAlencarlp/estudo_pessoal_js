// /*
// Desafio 1:
//     Crie um array com 5 números;
//     Percorra ele e imprima todos.

// Desafio 2:
//     Some todos os números do array e mostre o total.

// Desafio 3:
//     Crie um array com 5 nomes;
//     Percorra e imprima:
//         Olá, {nome}!

// Desafio 4:
//     Dado:
//         let notas = [7, 5, 8, 10, 4];
    
//     - calcule a média
//     - mostre se o aluno foi:
//         > aprovado (>= 7)
//         > recuperação (>= 5 e < 7)
//         > reprovado (< 5)
// */

// // Desafio 1
// let numeros = [10, 4, 5, 6, 50];
// // primeira forma
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// // segunda forma (melhor)
// for (let i of numeros) {
//     console.log(i);
// }

// // -----------------------------------------------

// // Desafio 2
// let total = 0;
// let numeros2 = [10, 5, 80, 25, 8];

// for (let i of numeros2) {
//     total += i;
// }
// console.log(total); // 128

// // -----------------------------------------------

// // Desafio 3
// let nomes = ['Felipe', 'João', 'Maria', 'Joaquim', 'Felicio'];

// for (let n of nomes) {
//     console.log(`Olá, ${n}!`);
// }

// // -----------------------------------------------

// // Desafio 4
// let notas = [5, 5, 5, 6, 1];

// let totalNotas = 0;
// for (let n of notas) {
//     totalNotas += n;
// }

// // Para evitar possíveis erros, o ideal é sempre fazer tratamento antes do calculo
// if (notas.length === 0) {
//     console.log('Não há notas para calcular média.');
    
// } else {
//     let media = totalNotas / notas.length;
//     if (media < 5) {
//         console.log('Aluno reprovado!');
//     } else if (media < 7) {
//         console.log('Aluno em recuperação!');
//     } else {
//         console.log('Aluno aprovado!');
//     }
// }

console.log(NaN === NaN)
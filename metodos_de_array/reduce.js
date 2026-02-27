// reduce = reduzir tudo em um valor
 
let numeros = [1,2,3,4];

let soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(soma); // 10

// O que acontece no reduce é que ele substitui o LOOP for, ficando mais limpo
// o 'acumulador' é o valor que será inicializado - é posto como segundo parametro -
// e o 'número' é o 'item atual' que será o valor da iteração no momento

/*
Exemplos de valores iniciais para o acumulador:
    Para soma -> começa com 0;
    Para multiplicação -> começa com 1;
    Para montar array -> começa com [];
    Para montar objeto -> começa com {}
*/

// Exemplo multiplicação
[2,4,6].reduce((acc, n) => acc * n, 1); // 48

// Exemplo montando array (para saber o maior número)
let numeross = [10, 5, 30, 8];

let maior = numeross.reduce((acc, numero) => {
    if (numero > acc) {
        return numero;
    }
    return acc;
}, numeross[0]);

// Desafio simples para consolidar
let num = [1,2,3,4,5,6];

// usar filter para pegar só os pares
// usar map para dobrar esses pares
// usar reduce para somar o resultado final

let resultado = num
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
console.log(resultado); // 24

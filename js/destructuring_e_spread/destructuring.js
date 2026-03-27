/*
    Destructuring:
        Basicamente extrai valores de arrays ou objetos de forma elegante.
*/

// Sem destructuring
let numeros = [10, 20, 30];

let a = numeros[0];
let b = numeros[1];
let c = numeros[2];

// Com destructuring
let [n1, n2, n3] = numeros;
// fica muito mais limpo

// É possível pular posição
let numeros3 = [10, 20, 30];
let [primeiro, , terceiro] = numeros3; // deixando o espaço vazio do que quero pular
console.log(terceiro); // 30

// ----------------------------------------------------

// Utilizando REST em array
let numeros4 = [1, 2, 3, 4, 5];
let [prim, ...resto] = numeros4;
// aqui o ... é REST captura o restante e monta em uma outra lista
console.log(prim); // 1
console.log(resto); // [2,3,4,5]

// ----------------------------------------------------

// Destructuring de OBJETO

// Sem desctructuring
let usuario = {
    nome: 'Felipe',
    idade: 32
};

let nome1 = usuario.nome;
let idade1 = usuario.idade;

// Com destructuring
let { nome, idade } = usuario; // necessário que as variáveis tenham o mesmo nome

// ----------------------------------------------------

// Renomeando variável
let { nome: nomeUsuario } = usuario;
console.log(nomeUsuario)

// ----------------------------------------------------

// Valor padrão
let { cidade = 'Não informada' } = usuario; // se não existir usa o padrão
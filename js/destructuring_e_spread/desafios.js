/*
    - Desafio 1:
        Dado:
            let usuario = {
                nome: 'Ana',
                idade: 25,
                cidade: 'Curitiba' 
            };
        Use destructing para extrair nome e cidade

    - Desafio 2:
        Dado:
            let numeros = [5, 10, 15, 20];
        Use destructuring para pegar:
            - primeiro número;
            - último número;
            - resto em um array

    - Desafio 3:
        Crie um novo objeto baseado nesse:
            let produto = {
                nome: 'Notebook',
                preco: 3000
            };
        Crie um cópia usando spread e adicione:
            - estoque: 10;
            - preco com 10% de desconto;

        Sem alterar o original.
*/

// Desafio 1
let usuario = {
    nome: 'Ana',
    idade: 25,
    cidade: 'Curitiba'
};

let { nome, cidade } = usuario;
console.log(nome);
console.log(cidade);

// -----------------------------------------------------

// Desafio 2
let numeros = [5, 10, 15, 20];

// Primeira resolução
let [primeiro, ...resto] = numeros; // resto [10, 15, 20]
let ultimo = resto.pop(); // remove o último e retorna ele
// * detalhe: pop() altera o array
console.log(primeiro);
console.log(ultimo);
console.log(resto);

// Segunda resolução -> mais "limpa" mentalmente
let [prim, ...meioEUltimo] = numeros; // meioEUltimo ficou -> [10, 15, 20]

// acesso o array, como quero somente o último número, preciso acessar por índice
// com isso tenho que pensar no "indice" e não no valor dentro do array,
// pegando  o tamanho do novo array criado e diminuindo 1
// consigo ter a última posição do array
let ultimoN = meioEUltimo[meioEUltimo.length - 1]; // meioEUltimo[2] = 20

// utilizando o slice para pegar os valores restantes
// slice(inicio, fim)
let restante = meioEUltimo.slice(0, -1);
// aqui está sendo utilizado o slice(0, -1)
// o -1 significa: para antes do fim
// o ...meioEUltimo traz o restante dos números que sobrarão e cria um novo array
// ficando: [10, 15, 20]
// como estou utilizando o slice, ele começa no primeiro indice (0 que é 10)
// e retira o último indice (2 que é 20)
// ficando como resultado = [10, 15]

console.log(prim);
console.log(ultimoN);
console.log(restante);

// -----------------------------------------------------

// Desafio 3
let produto = {
    nome: 'Notebook',
    preco: 3000
};
console.log(produto);

let copia = {
    ...produto,
    estoque: 10,
    precoCDesconto: produto.preco - (produto.preco / 10)
};
console.log(copia);
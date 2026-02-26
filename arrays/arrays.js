// Array = lista de valores -> [1, 2, 'Nome', 'idade']
// Sem array não é possível criar:
//  Lista de usuários
//  Produtos
//  Pedidos
//  Notas

// Acessando valores em um array
let nomes = ['Felipe', 'João', 'Maria'];
console.log(nomes[0]); // Felipe
console.log(nomes[1]); // João
console.log(nomes[2]); // Maria
// Sempre o primeiro será 0

// Percorrendo um array
let numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// numeros.length retorna o tamanho do array

// -------------------------------------------------------------

// Verificando se um valor é NaN
valor === NaN // nesse caso sempre será false, forma errada de verificar

Number.isNaN(valor) // essa é a forma correta

// Exemplo
let resultado = 0 / 0;
console.log(Number.isNaN(resultado)); // true

// * NaN é o único valor do JavaScript que não é igual a ele mesmo! *

// Variáveis e tipos de dados

let nome = 'Felipe';
const idade = 32;
let sabeJs = false;
let nulo = null;
let vazio;

console.log(`O tipo da variável NOME é: ${typeof nome}`); // string
console.log(`O tipo da variável IDADE é: ${typeof idade}`); // number
console.log(`O tipo da variável SABEJS é: ${typeof sabeJs}`); // boolean
console.log(`O tipo da variável NULO é: ${typeof nulo}`); // object null
console.log(`O tipo da variável VAZIO é: ${typeof vazio}`); // undefined

// idade = 40; // erro, não pode mudar uma constante - const
nome = 'Felipe Alencar';
console.log(`O nome foi alterado para: ${nome}`);
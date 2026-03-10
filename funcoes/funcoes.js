// Aqui o código começa a ficar organizado de verdade

// Function (função) -> é um bloco de código reutilizável
//  - Pode receber dados (parâmetros)
//  - Pode processar algo
//  - Pode retornar um resultado

// Forma tradicional
function saudacao() {
    console.log('Olá!');
} // Aqui a função só foi declarada

// Para executar
saudacao();

// Função com parâmetro
//  - É a função que quando for chamada é necessário passar o parâmetro exigido
function saudacao2(nome) {
    console.log(`Olá, ${nome}`);
}

// Executando
saudacao2('Felipe');

// Função com retorno
function soma(a, b) {
    return a + b;
} // importante ressaltar que o "return" encerra a função

// Utilizando a função
let resultado = soma(5, 3);
console.log(resultado);

// ------------------------------------------------------------

// Arrow Function
//  - Mesma coisa só que de forma mais enxuta e moderna
const soma2 = (a, b) => {
    return a + b;
}

// Versão ainda mais enxuta
const soma = (a, b) => a + b;
//  - se tem uma única expressão, posso omitir {} e "return"

/*
    ***PARA LEMBRAR SOBRE ARROW FUNCTION:
        Arrow function sem {} -> RETURN automático
        Arrow function com {} -> precisa usar RETURN
*/

// ------------------------------------------------------------

// Escopo -> aqui começa a ficar mais interessante
function teste() {
    let numero = 10;
}
// console.log(numero); // erro
// -> Variáveis dentro de função não existe fora dela, isso se chama
// escopo local, só pode ser usada dentro da função

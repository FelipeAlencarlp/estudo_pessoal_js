// Desafio 1:
/*
Crie um código que:
    1. Receba uma idade
    2. Verifique:
        - Menor que 12 -> Criança
        - 12 a 17 -> Adolescente
        - 18 a 59 -> Adulto
        - 60+ -> Idoso
*/

// Desafio 2:
/*
Crie um código que:
    - Verifique se um número é par ou impar
    - Verifique se é positivo ou negativo
*/

// Desafio 3:
/*
Crie uma variável usuario:
    let usuario = {
        nome: "Felipe",
        idade: 20,
        admin: true
    };

E faça:
    - se for admin e maior de 18 -> "Acesso total"
    - se for admin e menor de 18 -> "Admin restrito"
    - se não for admin -> "Usuário comum"
*/

// 1º Desafio
let idade = 10;
if (idade >= 60) {
    console.log('Essa pessoa é Idoso.');
} else if (idade >= 18) {
    console.log('Essa pessoa é Adulto.');
} else if (idade >= 12) {
    console.log('Essa pessoa é Adolescente.')
} else {
    console.log('Essa pessoa é Criança.')
}

// 2º Desafio
// Par ou Impar
let numero = 1;
if (numero % 2 === 0) {
    console.log('O número é PAR.');
} else {
    console.log('O número é IMPAR.');
}

// Positivo ou Negativo
let numeroPN = -5;
if (numeroPN < 0) {
    console.log('O número é negativo.');
} else {
    console.log('O número é positivo');
}

// 3º Desafio
let usuario = {
    nome: "Felipe",
    idade: 17,
    admin: false
};

if (!usuario.admin) {
    console.log('Usuário comum do sistema');
} else if (usuario.admin && usuario.idade < 18) {
    console.log('Usuário com acesso restrito ao sistema');
} else {
    console.log('Usuário tem acesso total ao sistema');
}
/*
- Desafio 1:
    Imprima os números de 1 até 10 usando FOR

- Desafio 2:
    Imprima apenas os números pares de 1 até 20

- Desafio 3:
    Crie um loop que:
        - some todos os números de 1 até 100
        - mostre o resultado final

- Desafio 4:
    Crie um sistema simples de senha:
        let senhaCorreta = '1234';
        let tentativa = '';

    use WHILE para repetir até que a senha esteja correta.
    (Simule mudando o valor da variável, não precisa input ainda)
*/

// Desafio 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Desafio 2
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Desafio 3
let resultado = 0;
for (let i = 1; i <= 100; i++) {
    resultado += i;
}
console.log(resultado);

// Desafio 4
let senhaCorreta = '1234';
let tentativa = '0000';

while (tentativa !== senhaCorreta) {
    console.log('Senha incorreta, por favor tente novamente.');

    tentativa = '1234';
}
console.log('Logado com sucesso!');
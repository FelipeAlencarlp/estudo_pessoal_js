// Operadores Matemáticos
// + - * / %

let a = 10;
let b = 5;

console.log(`Resultado de a + b = ${a + b}`); // 15
console.log(`Resultado de a - b = ${a - b}`); // 5
console.log(`Resultado de a * b = ${a * b}`); // 50
console.log(`Resultado de a / b = ${a / b}`); // 2

// operador muito usado em lógica % que é o resto da divisão
console.log(`Resultado de a % b = ${a % b}`); // 0

// ------------------------------------------------------------------

// Operadores de comparação
// < > <= >=

console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false

// O MAIS IMPORTANTE DO JS
// == vs ===
// == -> converte o tipo
// === -> compara valor e o tipo

console.log("10" == 10); // true
console.log("10" === 10); // false
// SEMPRE USAR ===

// ------------------------------------------------------------------

// Operadores lógicos
// && -> E
// || -> OU
// !  -> NÃO

let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log('Pode dirigir');
}

// ------------------------------------------------------------------

// Condicionais (IF / ELSE)
// caso a condicional if for verdadeira vai ser executado o que estiver no bloco
// caso seja falsa vai entrar no bloco else

let nota = 5;
if (nota >= 7) {
    console.log('Aluno aprovado!');
} else {
    console.log('Aluno reprovado =(');
}

// ELSE IF
// caso a condicional if for falsa se tiver um else if ele vai ver se a mesma
// é verdadeira, pode ter quantos else if quiser (não recomendado)

let notaAluno = 5;
if (notaAluno >= 7) {
    console.log('Aluno aprovado!');
} else if (notaAluno >= 5) {
    console.log('Aluno em recuperação.');
} else {
    console.log('Aluno reprovado =(');
}
// SPREAD -> expandir: é o oposto de rest, ele espalha valores

// SPREAD em array
let numeros = [1, 2, 3];
let novosNumeros = [...numeros, 4, 5]; // cria uma cópia e adiciona valores
console.log(novosNumeros);

// ----------------------------------------------------

// SPREAD em objeto
let usuario = {
    nome: 'Felipe',
    idade: 32
};

let usuarioAtualizado = {
    ...usuario,
    idade: 33
}; // Muito utilizado no REACT
console.log(usuarioAtualizado)

// -----------------------------------------------------

/*
    ALGO MUITO IMPORTANTE:
        SPREAD não faz cópia profunda (deep copy).
        Ele faz cópia rasa (shallow copy).
*/

// Exemplo
let obj = {
    nome: 'Felipe',
    endereco: {
        cidade: 'RS'
    }
};

let copia = { ...obj };

copia.endereco.cidade = 'RJ';

console.log(obj.endereco.cidade); // RJ
// Aqui acontece a mudança em ambos, pois o objeto interno continua sendo referência.
// Isso importa muito no mundo real.
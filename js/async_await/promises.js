/*
    Até agora foi estudado código sincrono, onde o programa vai excutando linha
    por linha.
    Mas para algo mais complexo e demorado como:
    Buscar dados de uma API, ler banco de dados, esperar 2 segundos, fazer upload.
    Isso não pode travar o programa.
    Com isso entra o conceito de Assincronicidade.

    -> JS não espera terminar algo. Ele continua executando o resto.
*/

// Exemplo prático
console.log('Inicio');

setTimeout(() => {
    console.log('Demorou 2 segundos.');
}, 2000);

console.log('Fim');
// Esse exemplo mostra claramente o comportamento do JS
// Sendo executado:
//  Inicio
//  Fim
//  Demorou 2 segundos

/*
    Passo a passo mental:
        1 - console.log('Inicio') -> executa
        2 - setTimeout(...) -> é enviado para a Web API do navegador
        3 - JS continua
        4 - console.log('Fim') -> executa
        5 - após 2 segundos -> a função volta para a fila
        6 - event loop executa -> 'Demorou 2 segundos'

    Isso é assincronicidade baseada em callback.
*/

/*
    Problema dos callbacks

    Vamos imaginar:
        Buscar usuário ->
        Depois buscar pedidos ->
        Depois buscar pagamentos ->
        Depois validar estoque ->
        Depois gerar nota...

    Com callbacks ficaria assim:
        buscarUsuario(() => {
            buscarPedidos(() => {
                buscarPagamentos(() => {
                    gerarNota(() => {
                        console.log('Finalizado');
                    });
                });
            });
        });

    Isso vira o famoso: Callback Hell
    Código feio. Dificil de ler. Dificil de manter.
*/

/*
    Aí que entram as PROMISES!

    Promise é uma forma organizada de lidar com operações assíncronas.
    Ela pode estar em 3 estados:
        - Pending (pendente)
        - Fulfilled (resolvida)
        - Rejected (erro)

    Promises: É um objeto que representa um valor que pode chegar no futuro.
              Ela é usada para operações que demoram.
*/

// Primeira Promise
let promessa = new Promise((resolve, reject) => {
     // resolve e reject -> são funções padrões da classe Promise
     // resolve: A operação deu certo
     // reject: A operação falhou
    let sucesso = true; // variável para simular resposta: API, Banco, etc.

    if (sucesso) {
        // se entrar aqui a variável 'sucesso' guarda o valor 'Deu certo!'
        resolve('Deu certo!');
    } else {
        // se entrar aqui a variável 'sucesso' guarda o valor 'Deu erro!'
        reject('Deu erro!');
    }
});

// Consumindo a Promise
promessa
    // .then() executa quando a Promise foi resolvida (resolve)
    // o que estiver dentro do resolve, vira o parâmetro do .then()
    .then(res => console.log(res)) // Deu certo!
    // .catch() executa quando a Promise foi rejeitada (reject)
    // o que estiver dentro do reject, vira o parâmetro do .catch()
    .catch(err => console.log(err)); // Deu erro!

/*
    Fluxo mental:
        1 - Promise é criada
        2 - Executor roda imediatamente
        3 - resolve OU reject é chamado
        4 - Promise muda de estado
        5 - .then() ou .catch() executa

    ** Muito Importante:
        Promise só pode mudar de estado UMA vez.
        Depois que 'resolve' ou 'reject' acontece: Ele nunca mais muda!

        Sempre lembrar de tratar o erro para não gerar problemas sérios em produção.
        Por isso sempre fazemos:
            algumaPromise()
                .then(...)
                .catch(...)
*/

// Um exemplo sobre mudança única de estado da Promise
new Promise((resolve, reject) => {
    resolve('ok');
    reject('erro');
});
// -> Aqui acontece que, resolve('ok') é chamado primeiro.
//    A Promise muda de estado para 'fulfilled'. A Promise fica FINALIZADA.
//    Depois que ela resolve ou rejeita, ela fica 'settled' (finalizada)
// Etnão quando o reject('erro') roda, ele simplesmente é ignorado.
// Não da erro. Não sobrescreve. Não muda o estado. Nada acontece.

/*
    Tudo isso é importante pois, em código real, ás vezes pode acontecer
    acidentalmente:
        - Chamar resolve duas vezes
        - Chamar resolve e reject
        - Ter fluxo mal estruturado
    
    E a Promise vai simplesmente aceitar o primeiro e ignorar o resto.
*/

// EXEMPLO PARA FINALIZAR E CONSOLIDAR
new Promise((resolve, reject) => {
    setTimeout(() => resolve('ok'), 2000);
    reject('erro');
})
.then(res => console.log(res))
.catch(err => console.log(err));

/*
    Passo a passo mental:
        1 - A Promise é criada
        2 - O executor roda imediatamente (ele é sincrono)
        3 - setTimeout() agenda o resolve para 2 segundos depois
        4 - Logo em seguida, reject('erro') é chamado
        5 - A Promise muda de estado para X rejected
        6 - O .catch() executa
        7 - Depois de 2 segundos o resolve('ok') tenta rodar...
        8 - Mas é ignorado porque a Promise já foi finalizada

    Resultado final no console: erro
*/
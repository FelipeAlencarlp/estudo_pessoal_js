/*
    Event Loop - O coração do JavaScript

    Isso explica 100% do comportamento de códigoo assíncrono.

    Depois de entender:
        - Promise
        - setTimeout
        - async/await
        - fetch
        - NodeJS

    tudo começa a fazer sentido.

    Primeiro precisamos entender 3 coisas
    JavaScript possui:
        1 - Call Stack
        2 - Web APIs
        3 - Event Loop -> Queues

-------------------------------------------------------

    1 - Call Stack (pilha de execução)
        É onde o JavaScript executa as funções.

        Exemplo:
            function a() {
                console.log('A');
            }

            function b() {
                console.log('B');
            }

            a();
            b();

        Execução:
            Call Stack
            b();
            a();

        Saída:
            A
            B

        Porque executa linha por linha.
        Isso é chamado de:
            | Execução síncrona

-------------------------------------------------------

    2 - Agora entra o código assíncrono
        Exemplo:
            console.log('A');

            setTimeout(() => {
                console.log('B');    
            }, 0);

            console.log('C');

        -> Nesse caso a saida será:
            A
            C
            B

        Pois quando JS escontra: seTimeout
        Ele não executa direto.
        Ele envia para:
            Web APIs
        Depois de terminar o tempo, ele colocar na:
            Callback Queue

        Fluxo real:
            Call Stack
            Web APIs
            Callback Queue
            Event Loop
            Call Stack novamente

        O EVENT LOOP
            O Event Loop fica perguntando:
                Call Stack está vazio?

            Se SIM, ele pega algo da Queue e executa.

-------------------------------------------------------

    Agora vem a parte MAIS IMPORTANTE
        Existe dois tipos de fila:
            Macrotask Queue
            Exemplo:
                setTimeout
                setInterval
                setImmediate (Node)

            Microtask Queue
            Exemplo:
                Promise
                then
                catch
                finally
                await
        
        **Microtask tem prioridade
            Sempre executa antes da macrotask.

            Exemplo clássico:
                console.log('A');

                setTimeout(() => {
                    console.log('B');    
                }, 0);

                Promise.resolve().then(() => {
                    console.log('C');
                });

                console.log('D');


            Destrinchando o que acontece:
                1. Primeira linha:
                    console.log('A');
                    - Vai direto para o Call Stack
                    Saida:
                        A

                2. setTimeout:
                    setTimeout(() => {
                        console.log('B');    
                    }, 0);
                    - O que acontece:
                        Call Stack -> Web API
                    
                    * Ele não entra na Call Stack agora.
                      Vai para o timer da Web API.
                      Depois que o tempo termina (0ms), ele vai para:
                        Macrotask Queue
                      Ou seja:
                        Macrotask Queue:
                        [B]

                3. Promise
                    Promise.resolve().then(() => {
                        console.log('C');
                    });
                    - Isso gera uma Microtask.
                      Ele vai direto para:
                        Microtask Queue

                      Fila agora:
                        Microtask Queue
                        [C]

                        Macrotask Queue
                        [B]

                4. Última linha
                    console.log('D')
                    - Executa direto
                    Saida agora:
                        A
                        D

                AGORA ENTRA O EVENT LOOP
                    A regra é:
                        1. Esvazia Call Stack
                        2. Executa TODAS Microtask
                        3. Depois excuta 1 Macrotask
                
                5. Executa Microtasks
                    - Executa:
                        C
                
                6. Executa Macrotask
                    - Executa:
                        B

                Saida final:
                    A
                    D
                    C
                    B

    **Em resumo, o JavaScript executa TODO código síncrono primeiro
      Depois executa TODAS as microtasks
      Depois executa macrotasks

    **Sempre pensar assim:
        1. Código síncrono
        2. Microtasks (Promises / await)
        3. Macrotasks (setTimeout)
                
-------------------------------------------------------

    Um exemplo para fixação:
        console.log('A');

        setTimeout(() => {
            console.log('B');    
        }, 0);

        Promise.resolve().then(() => {
            console.log('C');
            
            Promise.resolve().thne(() => {
                console.log('D');    
            });
        });

        console.log('E');

        Saída:
            A
            E
            C
            D
            B

        CÓDIGO ANALISADO PROFUNDAMENTE:
            1. Execução síncrona (Call Stack)
                JavaScript começa executando todo código síncrono.
                Linha 1:
                    console.log('A')

                Saida:
                    A

                Linha 2:
                    setTimeout(...)
                
                Vai para:
                    Web API

                Depois de 0ms vai para:
                    Macrotask Queue
                    [B]

                Linha 3:
                    Promise.resolve().then(...)
                Isso cria uma Microtask.

                Fila:
                    Microtask Queue
                    [C callback]

                Linha 4:
                    console.log('E')
                Executa imediatamente

                Saida agora:
                    A
                    E

                Agora entra o EVENT LOOP
                    A call Stack está vazia.
                    Então o Event Loop segue a regra:
                        1. Executa TODAS as microtasks
                        2. Depois executa uma macrotask

            2. Executa primeira microtask
                Executa o .then():
                    console.log('C')

                Saida:
                    A
                    E
                    C
            
            ***Aqui acontece algo MUITO importante
                Dentro da microtask:
                    Promise.resolve().then(() => {
                        console.log('D')    
                    })
                Isso cria outra microtask.

                Fila agora:
                    Microtask Queue
                    [D]
            
            3. Event Loop verifica novamente
                Regra importante:
                    | Enquanto houve microtasks, elas continuas
                    | sendo executadas.

                Então executa:
                    D

                Saída:
                    A
                    E
                    C
                    D

            4. Agora sim executa Macrotask
                Fila:
                    Macrotask Queue
                    [B]

                Executa:
                    B

                Saída final:
                    A
                    E
                    C
                    D
                    B

        REGRA AVANÇADA APRENDIDA
            Microtasks podem criar novas microtasks.
            E o Event Loop faz:
                Executa microtask
                Se criar nova microtask
                Executa também
                Só depois vai para macrotask

            Ou seja:
                Microtask queue precisa ficar vazia
                ANTES de rodar macrotask

        VISUALIZANDO O FLUXO:
            Call Stack
            A
            setTimeout -> Macrotask Queue
            Promise -> Microtask Queue
            E
            Call Stack vazia
            Microtask -> C
            Nova microtask criada -> D
            Executa D
            Microtask Queue vazia
            Macrotask -> B

        Conclusão:
            Foi entendido 3 conceitos importantes do JavaScript:
                - Call Stack
                - Microtask Queue
                - Macrotask Queue

            Isso é base de performance, Node.js, React, APIs,
            concorrência, tudo.

-------------------------------------------------------

    Exemplo para consolidar:
        console.log('A')

        setTimeout(() => {
            console.log('B')

            Promise.resolve().then(() => {
                console.log('C')
            })
        })

        Promise.resolve().then(() => {
            console.log('D')
        })

        console.log('E')

        Saída:
            A
            E
            D
            B
            C

        ** Aqui tem um regra IMPORTANTÍSSIMA
            Uma microtask criada dentro de uma macrotask:
                executa logo após a macrotask terminar!

            Fluxo:
                Macrotask termina
                Microtasks criadas dentro dela executam
                Event Loop continua
*/

console.log('A')

setTimeout(() => console.log('B'), 0)

Promise.resolve().then(() => console.log('C'))

queueMicrotask(() => console.log('D')) // Microtask normal, entra na ordem

console.log('E')
 
/*
Saida:
    A
    E
    C
    D
    B
*/
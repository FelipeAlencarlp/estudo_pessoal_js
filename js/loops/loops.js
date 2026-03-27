// Loops
// -> Loop = repetir uma ação até uma condição parar

/*
1 - FOR (o mais usado)
    Estrutura:
        for (inicio; condição; incremento) {
            // código
        }

    Exemplo:
        for (let i = 0; i < 5; i++) {
            console.log(i)
        }

    - let i = 0 -> começa com 0
    - i < 5 -> enquanto for verdadeiro
    - i++ -> soma 1 a cada volta

    Saida:
        0
        1
        2
        3
        4

    O loop só para quando a condição vira FALSE

2 - WHILE
    Usado quando não se sabe exatamente quantas vezes vai repetir.

    let contador = 0;
    
    while (contador < 5) {
        console.log(contador);
        contador++;
    }
    -> caso esqueça o contador++ (incremento) vira loop infinito
*/
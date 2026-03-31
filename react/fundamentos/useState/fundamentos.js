/*
    useState (estado)

    O que é estado?
        Estado = dados que podem mudar na tela

    Exemplo:
        - contador
        - input de formulário
        - lista de tarefas

    Primeiro exemplo (contador)
        import { useState } from "react";

        function Contador() {
            const [contador, setContador] = useState(0);

            return (
                <div>
                    <h2>{contador}</h2>
                    <button onClick={() => setContador(contador + 1)}>
                        Aumentar
                    </button>
                </div>
            );
        }

        Explicação completa:
            const [contador, setContador] = useState(0);

            Isso aqui faz 3 coisas:
                1. Cria um estado
                    contador

                2. Cria uma função para alterar
                    setContador

                3. Define valor inicial
                    0

            REGRA DE OURO
                Nunca faça isso:
                    contador = contador + 1; ERRADO!!

                Sempre:
                    setContador(contador + 1); CERTO!!

                Por quê?
                    Porque o React precisa saber que algo mudou pra
                    re-renderizar a tela.

        Entendendo o fluxo
            Quando clica no botão:
                clique -> setContador -> React atualiza -> tela muda


        ERRO COMUN (IMPORTATE)
            Isso aqui é errado:
                onClick={setContador(contador + 1)}

            -> isso executa na hora, não no clique.

            Correto:
                onClick={() => setContador(contador + 1)}


        Conceito MUITO importante
            React funciona assim:
                -> Estado muda -> interface atualiza automaticamente

            Isso é o que chamamos de:
                -> UI reativa

            SEMPRE QUE QUISER MUDAR ALGO:
                map -> altera -> setState
*/
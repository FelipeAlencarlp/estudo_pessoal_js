/*
    Se Context é sobre compartilhar estado,
    Custom Hooks é sobre reutilizar lógica

    O QUE É UM CUSTOM HOOK?
        É basicamente:
            uma função que usa hooks (useState, useEffect, etc)

        EXEMPLO SIMPLES
            import { useState } from 'react';
            function useContador() {
                const [count, setCount] = useState(0);

                function incrementar() {
                    setCount(count + 1);
                }

                return { count, incrementar };
            }

            USO:
                const { count, incrementar } = useContador();

            TRADUÇÂO MENTAL
                Antes:
                    useState -> função -> lógica -> repetido em vários lugares

                Agora:
                    hook encapsula tudo

            POR QUE ISSO EXISTE?
                Pra evitar isso \/

                    // Componente A
                    const [data, setData] = useState(...);
                    useEffect(...);

                    // Componente B
                    const [data, setData] = useState(...);
                    useEffect(...);

                -> repetição de lógica

            COM HOOK
                const data = useMinhaLogica();
                -> limpo e reutilizável

        REGRA DE OURO
        -> Custom Hook sempre começa com 'use'
            useAlgo()
            -> isso permite React entender corretamente
*/
/*
    useEffect

        O que é useEffect?
            Serve para executar efeitos colaterais.

        Traduzindo:
        -> Coisas que acontecem fora da renderização
            Exemplos:
                - Buscar dados de API
                - Rodar algo quando a tela carrega
                - Escutar eventos (scroll, resize)
                - Timer (setTimeout / setInterval)

        Exemplo:
            import { useEffect } from 'react';

            function App() {
                useEffect(() => {
                    console.log('Rodou o useEffect');    
                });

                return <h1>Teste</h1>;
            }

            O que acontece aqui?
                Esse useEffect roda:
                    Toda vez que o componente renderiza

        Problema disso
            Se o estado mudar -> renderiza ->
            roda de novo -> pode virar bagunça

        Forma correta (mais usada)
            useEffect(() => {
                console.log('Rodou UMA vez');
            }, []);

        Agora o que muda?
            -> Esse [] é o array de dependências
                - [] vazio -> roda só uma vez (quando monta)
                - [algo] -> roda quando 'algo' mudar

        Analogia simples
            Pensa assim:
                useEffect(() => {
                    // faz algo    
                }, [dependencias]);

            -> "Executa isso quando essas coisas mudarem"

        Exemplo com estado
            import { useState, useEffect } from 'react';

            function Contador() {
                const [numero, setNumero] = useState(0);

                useEffect(() => {
                    console.log('Número mudou:', numero);    
                }, [numero]);

                return (
                    <div>
                        <h2>{numero}</h2>
                        <button onClick={() => setNumero(numero + 1)}>
                            +
                        </button>
                    </div>
                );
            }

            O que acontece?
                - clicou no botão ->
                - numero mudou ->
                - useEffect rodou
*/
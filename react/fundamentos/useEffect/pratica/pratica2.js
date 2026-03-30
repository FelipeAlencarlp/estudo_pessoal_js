import { useState, useEffect } from 'react';

function Relogio() {
    const [tempo, setTempo] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo((t) => t + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };
    }, []);
}

export default Relogio;

/*
    (t) => t + 1 -> é uma função de callback para evitar BUG
    
    O return dentro do useEffect é uma função de limpeza

    Ele roda quando:
        - componente desmonta
        - ou antes de rodar o efeito novamente

    ERROS COMUNS:
        X Esquecer o array
            useEffect(() => {})

        X Loop infinito
            useEffect(() => {
                setNumero(nume + 1);    
            }, [numero]);

            -> isso trava tudo

    RESUMO
        Situação                Como usar
        ---------------------------------------
        Rodar uma vez           []
        ---------------------------------------
        Rodar quando algo       [variavel]
        muda
        ---------------------------------------
        Limpar efeito           return () => {}
*/
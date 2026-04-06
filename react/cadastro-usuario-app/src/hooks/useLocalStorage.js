import { useState, useEffect } from "react";

export function useLocalStorage(chave, valorInicial) {
    const [valor, setValor] = useState(valorInicial);

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem(chave));

        if (dados !== null) {
            setValor(dados);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [valor]);

    return [valor, setValor];
}
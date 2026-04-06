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

/*
    1. Dependências do useEffect
        Quer reagir a       Dependência
        -------------------------------
        mudança de chave    [chave]
        -------------------------------
        mudança de valor    [valor]

    2. Estado vs chave
        - chave -> onde salvar
        - valor -> o que salvar

    3. Padrão de hooks
        return [valor, setValor]
        -> segue o padrão do React
*/
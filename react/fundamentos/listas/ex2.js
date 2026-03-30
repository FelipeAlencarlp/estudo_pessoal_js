// Misturar lista + estado
import { useState } from "react";

function ListaDinamica() {
    const [itens, setItens] = useState(['item 1', 'item 2']);

    return (
        <ul>
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

/*
    ERRO COMUM
        Esquecer o 'return' no map:
            nomes.map((nome) => {
                <li>{nome}</li>;
            });

        -> Corrige:
            nomes.map((nome) => (
                <li>{nome}</li>
            ));
*/
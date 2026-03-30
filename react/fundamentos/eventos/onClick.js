function Botão() {
    function clicar() {
        console.log('Clicou');
    }

    return <button onClick={clicar}>Clique aqui</button>
}

/*
    O que está acontecendo?
        onClick={clicar}
        -> está sendo passado a função, não executando

    ERRO CLÁSSICO
        onClick={clicar()}
        -> isso executa na hora, não no clique
 */

// Evento + useState (vida real)
import { useState } from "react";

function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <h2>{numero}</h2>

            <button onClick={() => setNumero(numero + 1)}>
                +
            </button>
        </div>
    );
}
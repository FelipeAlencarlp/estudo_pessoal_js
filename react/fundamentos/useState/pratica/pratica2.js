import { useState } from "react";

function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <h2>{numero}</h2>

            <button onClick={() => setNumero(numero + 1)}>
                +
            </button>

            <button onClick={() => setNumero(numero - 1)}>
                -
            </button>

            <button onClick={() => setNumero(0)}>
                Reset
            </button>
        </div>
    );
}

function App() {
    return (
        <Contador />
    );
}
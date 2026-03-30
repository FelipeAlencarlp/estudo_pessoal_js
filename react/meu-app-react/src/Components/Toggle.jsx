import { useState } from "react";

function Toggle() {
    const [visivel, setVisivel] = useState(true);

    return (
        <div>
            <button onClick={() => setVisivel(!visivel)}>
                Mostrar / Esconder
            </button>

            { visivel && <p>Agora você está vendo isso</p> }
        </div>
    );
}

export default Toggle;

/*
    O que está acontecendo?
        setVisivel(!visivel)
        -> inverte o valor (true <> false)

    Exemplo mais realista:
        function Status({ carregando }) {
            return (
                <div>
                    {carregando ? <p>Carregando...</p> : <p>Dados carregados!</p>}
                </div>
            );
        }
*/
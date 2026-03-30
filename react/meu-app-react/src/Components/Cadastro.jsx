import { useState } from "react";

function Cadastro() {
    const [nome, setNome] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Nome:', nome);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Cadastro;

/*
    - value controla input
    - onChange atualiza o estado
    - onSubmit controla envio
    - preventDefault evita reload
*/
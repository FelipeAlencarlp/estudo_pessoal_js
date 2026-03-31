import { useState } from "react";

function Formulario({ adicionarTarefa }) {
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if(!input.trim()) return;

        adicionarTarefa(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite a tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Formulario;
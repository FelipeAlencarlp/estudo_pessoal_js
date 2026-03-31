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
        <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: 5, placeContent: 'center' }}
        >
            <input
                type="text"
                placeholder="Digite a tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit;
                    }
                }}
            />

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Formulario;
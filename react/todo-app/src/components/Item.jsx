import { useState, useRef, useEffect } from "react";

function Item({ tarefa, marcarConcluida, excluirTarefa, editarTarefa }) {
    const [editando, setEditando] = useState(false);
    const [novoTexto, setNovoTexto] = useState(tarefa.texto);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editando) {
            inputRef.current.focus();
        }
    }, [editando]);

    function salvar() {
        if (!novoTexto.trim()) return;

        editarTarefa(tarefa.id, novoTexto);
        setEditando(false);
    }

    function cancelar() {
        setNovoTexto(tarefa.texto);
        setEditando(false);
    }

    return (
        <li style={{ display: 'flex', gap: 5, margin: 10 }}>
            {editando ? (
                <>
                    <input
                        ref={inputRef}
                        value={novoTexto}
                        onChange={(e) => setNovoTexto(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                salvar();
                            }
                        }}
                    />

                    <button onClick={salvar}>Salvar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </>
            ) : (
                <>
                    <p
                        style={{
                            textDecoration: tarefa.concluida ? "line-through" : "none"
                        }}
                    >
                        {tarefa.texto}
                    </p>

                    {!tarefa.concluida && (
                        <>
                            <button
                                title="Marcar como concluida"
                                onClick={() => marcarConcluida(tarefa.id)}
                            >
                                Concluir
                            </button>
                        
                            <button
                                title="Editar tarefa"
                                onClick={() => setEditando(true)}
                            >
                                Editar
                            </button>
                        </>
                    )}

                    <button
                        title="Excluir tarefa"
                        onClick={() => excluirTarefa(tarefa.id)}
                    >
                        Excluir
                    </button>
                </>
            )}
        </li>
    );
}

export default Item;
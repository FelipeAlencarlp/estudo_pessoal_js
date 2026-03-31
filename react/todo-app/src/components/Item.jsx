function Item({ tarefa, index, marcarConcluida, excluirTarefa }) {
    return (
        <li>
            <p
                style={{
                    textDecoration: tarefa.concluida ? "line-through" : "none"
                }}
            >
                {tarefa.texto}
            </p>

            {!tarefa.concluida && (
                <button
                    title="Marcar como concluida"
                    onClick={() => marcarConcluida(tarefa.id)}
                >
                    Concluir
                </button>
            )}

            <button
                title="Excluir tarefa"
                onClick={() => excluirTarefa(tarefa.id)}
            >
                Excluir
            </button>
        </li>
    );
}

export default Item;
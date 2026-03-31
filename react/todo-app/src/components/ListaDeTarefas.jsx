import Item from "./Item";

function ListaDeTarefas({ tarefas, marcarConcluida, excluirTarefa, editarTarefa }) {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <Item
                    key={tarefa.id}
                    tarefa={tarefa}
                    marcarConcluida={marcarConcluida}
                    excluirTarefa={excluirTarefa}
                    editarTarefa={editarTarefa}
                />
            ))}
        </ul>
    );
}

export default ListaDeTarefas;
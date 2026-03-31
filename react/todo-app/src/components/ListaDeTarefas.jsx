import Item from "./Item";

function ListaDeTarefas({ tarefas, marcarConcluida, excluirTarefa, editarTarefa }) {
    return (
        <ul>
            {tarefas.map((tarefa, index) => (
                <Item
                    key={tarefa.id}
                    tarefa={tarefa}
                    index={index}
                    marcarConcluida={marcarConcluida}
                    excluirTarefa={excluirTarefa}
                    editarTarefa={editarTarefa}
                />
            ))}
        </ul>
    );
}

export default ListaDeTarefas;
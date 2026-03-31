import Item from "./Item";

function ListaDeTarefas({ tarefas, marcarConcluida, excluirTarefa }) {
    return (
        <ul>
            {tarefas.map((tarefa, index) => (
                <Item
                    key={tarefa.id}
                    tarefa={tarefa}
                    index={index}
                    marcarConcluida={marcarConcluida}
                    excluirTarefa={excluirTarefa}
                />
            ))}
        </ul>
    );
}

export default ListaDeTarefas;
import './App.css';
import { useState, useEffect } from 'react';

import Formulario from './components/Formulario';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('tarefas'));
  }, []);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  const marcarConcluida = (id) => {
    const novas = tarefas.map((t) =>
      t.id === id
        ? { ...t, concluida: !t.concluida }
        : t
    );

    setTarefas(novas);
  };

  const excluirTarefa = (id) => {
    const novas = tarefas.filter((t) => t.id !== id);
    setTarefas(novas);
  };
  
  return (
    <>
      <h1>ToDo</h1>
      
      <Formulario adicionarTarefa={adicionarTarefa} />

      <ListaDeTarefas
        tarefas={tarefas}
        marcarConcluida={marcarConcluida}
        excluirTarefa={excluirTarefa}
      />
    </>
  );
}

export default App;

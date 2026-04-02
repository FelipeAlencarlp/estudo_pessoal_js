import './App.css'

import { useState } from 'react';

import Formulario from './Components/Formulario';
import ListaUsuarios from './Components/ListaUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const cadastrarUsuario = (nome, email) => {
    const novo = {
      id: Date.now(),
      nome,
      email
    };

    setUsuarios([...usuarios, novo]);
  };

  const excluirUsuario = (id) => {
    const novo = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(novo);
  };

  return (
    <>
      <Formulario
        cadastrarUsuario={cadastrarUsuario}
      />

      <ListaUsuarios
        usuarios={usuarios}
        excluirUsuario={excluirUsuario}
      />
    </>
  );
}

export default App

import './App.css'

import { useState } from 'react';

import Formulario from './Components/Formulario';
import ListaUsuarios from './Components/ListaUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const cadastrarUsuario = (nome, email) => {
    const emailExiste = usuarios.find((u) => u.email === email);

    if (emailExiste) {
      return alert('Esse e-mail já está em uso!');

    } else {
      const novo = {
        id: Date.now(),
        nome,
        email
      };
  
      setUsuarios([...usuarios, novo]);
    }
  };

  const editarUsuario = (id, novoNome, novoEmail) => {
    const novos = usuarios.map((usuario) =>
      usuario.id === id
        ? { ...usuario, nome: novoNome, email: novoEmail }
        : usuario
    );

    setUsuarios(novos);
    setUsuarioEditando(null);
  };

  const excluirUsuario = (id) => {
    const novos = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(novos);
  };

  return (
    <>
      <Formulario
        cadastrarUsuario={cadastrarUsuario}
        editarUsuario={editarUsuario}
        usuarioEditando={usuarioEditando}
      />

      <ListaUsuarios
        usuarios={usuarios}
        excluirUsuario={excluirUsuario}
        setUsuarioEditando={setUsuarioEditando}
      />
    </>
  );
}

export default App

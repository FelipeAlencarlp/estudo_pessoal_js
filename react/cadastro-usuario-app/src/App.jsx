import './App.css'

import { useState } from 'react';

import Formulario from './components/Formulario/Formulario';
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const cadastrarUsuario = (nome, email) => {
    const novo = {
      id: Date.now(),
      nome,
      email
    };

    setUsuarios([...usuarios, novo]);
  };

  const emailExiste = (email) => {
    return usuarios.some((usuario) => usuario.email === email);
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
    const confirmar = confirm('Tem certeza que deseja excluir esse usuário?');

    if (!confirmar) return;

    const novos = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(novos);
  };

  return (
    <>
      <Formulario
        cadastrarUsuario={cadastrarUsuario}
        editarUsuario={editarUsuario}
        usuarioEditando={usuarioEditando}
        emailExiste={emailExiste}
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

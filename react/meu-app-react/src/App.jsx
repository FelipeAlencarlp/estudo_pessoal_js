import './App.css';
import { useState, useEffect } from 'react';

import Relogio from './Components/Relogio';
import FormularioSimples from './Components/FormularioSimples';
import Toggle from './Components/Toggle';
import ListaUsuarios from './Components/ListaUsuarios';

function App() {
  const logado = true;

  return (
    <ListaUsuarios />
  );
}

export default App;

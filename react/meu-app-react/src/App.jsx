import './App.css';
import { useState, useEffect } from 'react';

import Contador from './Components/Contador';
import Usuario from './Components/Usuario';
import Relogio from './Components/Relogio';
import FormularioSimples from './Components/FormularioSimples';
import Toggle from './Components/Toggle';
import ListaUsuarios from './Components/ListaUsuarios';
import Cadastro from './Components/Cadastro';

// Context
import { ThemeProvider } from './Components/contexts/ThemeContext';
import Botao from './Components/Botao';
import Texto from './Components/Texto';
import { useLocalStorage } from './Components/hook/useLocalStorage';

function App() {
  const [usuarios, setUsuarios] = useLocalStorage('usuarios', []);

  return (
    <ThemeProvider>
      <Botao />
      <Texto />
    </ThemeProvider>
  );
}

export default App;

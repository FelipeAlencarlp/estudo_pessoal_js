import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}
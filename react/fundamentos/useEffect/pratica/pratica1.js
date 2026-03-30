import { useState, useEffect } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
      console.log('Número mudou:', numero);    
  }, [numero]);

  return (
      <div>
          <h2>{numero}</h2>
          <button onClick={() => setNumero(numero + 1)}>
              +
          </button>
      </div>
  );
}

function App() {
  return (
    <Contador />
  );
}
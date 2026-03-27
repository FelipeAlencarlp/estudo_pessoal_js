import './App.css'

function Usuario({ nome, idade }) {
  return (
    <div>
      <h2>Nome: { nome }</h2>
      <p>Idade: { idade }</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Usuario nome="Felipe" idade={25} />
      <Usuario nome="João" idade={30} />
    </div>
  );
}

export default App

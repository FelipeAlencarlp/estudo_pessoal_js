// Utilizando componentes

function Header() {
    return <h1>Minha aplicação</h1>;
}

function Descricao() {
    return <p>Aprendendo React na prática</p>;
}

// usando no App
function App() {
    return (
        <div>
            <Header />
            <Descricao />
        </div>
    );
}
// && (mostra só se for verdadeiro)
function App() {
    const logado = true;

    return (
        <div>
            { logado && <h1>Bem-vindo!</h1> }
        </div>
    );
}

/*
    Tradução:
        -> se for true, mostra
        -> se for false, não mostra nada
*/
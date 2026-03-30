// Operador ternário (MAIS USADO)
function App() {
    const logado = false;

    return (
        <div>
            { logado ? <h1>Bem-vindo!</h1> : <h1>Faça login</h1> }
        </div>
    );
}

// condicao ? valor_se_true : valor_se_false
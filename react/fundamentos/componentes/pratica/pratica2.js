// Criando outro componente - pensando como React

function Saudacao() {
    return <h2>Seja bem-vindo!</h2>;
}

// Usando dentro do App
function App() {
    return (
        <div>
            <h1>Meu app</h1>
            <Saudacao />
        </div>
    );
}

/*
    O que está acontecendo aqui?

        - Foi criado um componente -> Saudacao
        - Usado como se fosse uma tag HTML -> <Saudacao />
    Isso é o coração do React: composição de componentes
*/

// Criando um componente

function App() {
    return (
        <div>
            <h1>Meu primeiro app React</h1>
            <p>Estou aprendendo React</p>
        </div>
    );
}

export default App;

/*
    Explicação

        function App()
            - cria o componente

        return (
            - tudo que será exibido na tela

        <div>
            - React exige um elemento pai

        <h1>...</h1>
        <p>...</p>
            - JSX normal

        export default App
            - permite que o React use esse componente


        *REGRA IMPORTANTE

            Isso aqui NÂO funciona:
                return (
                    <h1>Oi</h1>
                    <p>Erro</p>
                )
            -> precisa de um único elemento pai
*/
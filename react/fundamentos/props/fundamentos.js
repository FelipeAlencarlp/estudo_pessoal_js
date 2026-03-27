/*
    PROPS -> passando dados entre componentes

    O que são props?
        Props = parâmetros de função

    Exemplo:
        function Saudacao(props) {
            return <h2>Olá, {props.nome}</h2>
        }

        Usando:
            function App() {
                return <Saudacao nome="Felipe" />;
            }

        O que aconteceu?
            - nome="Felipe" -> aqui foi passado um dado
            - props.nome -> recebe esse dado

        Forma moderna (com desestruturação)
            Em vez de:
                function Saudacao(props) {
                    return <h2>Olá, {props.nome}</h2>
                }

            Use:
                function Saudacao({ nome }) {
                    return <h2>Olá, { nome }</h2>
                }
                    
                *-> muito mais usado no dia a dia

-------------------------------------------------------------------

    Conceitos importantes (guardar bem)
        1. Props são somente leitura
            Isso é PROIBIDO:
                props.nome = "Outro nome"; errado!!

            -> Props não podem ser alterados

        2. Props podem ser qualquer tipo
            <Usuario idade={25} />      -> number
            <Usuario nome="Felipe" />   -> string
            <Usuario ativo={true} />    -> boolean
            <Usuario lista={[1,2,3]} /> -> array

        3. JSX dentro de props (nivel mais avançado)
            function Card({ children }) {
                return <div>{children}</div>;
            }

            Uso:
                <Card>
                    <h1>Título</h1>
                </Card>

            -> Isso é MUITO USADO!
*/
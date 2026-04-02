import { useTheme } from "./contexts/useTheme";

function Botao() {
    const { tema, alternarTema } = useTheme();

    return (
        <button onClick={alternarTema}>
            Tema atual: {tema}
        </button>
    );
}

export default Botao;

/*
    1. useContext(ThemeContext);
        -> "me dá os dados do contexto"

    2. const { tema, alternarTema }
        -> pega o que foi colocado no value
*/
function Form() {
    function enviar(e) {
        e.preventDefault(); // evita recarregar página
        console.log('Enviado');
    }

    return (
        <form onSubmit={enviar}>
            <button type="submit">Enviar</button>
        </form>
    );
}

/*
    IMPORTANTE
        e.preventDefault()
        -> impede o comportamento padrão do navegador
*/
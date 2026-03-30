// Evento onChange (inputs)
// Agora começa o mais importante
function Input() {
    function handleChange(event) {
        console.log(event.target.value);
    }

    return <input onChange={handleChange} />;
}

/*
    O que é esse 'event'?
        -> É o evento do navegador

        event.target.value
        -> valor atual do input
*/

// Forma atual (mais usada)
function Input() {
    return (
        <input onChange={(e) => console.log(e.target.value)} />
    );
}
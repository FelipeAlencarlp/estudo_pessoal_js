import { useState } from "react";

function FormularioSimples() {
    const [nome, setNome] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setNome(e.target.value)}
            />

            <p>Olá, {nome}</p>
        </div>
    );
}

export default FormularioSimples;

/*
    O que está acontecendo?
        - usuário digita ->
        - onChange dispara ->
        - setNome atualiza ->
        - tela muda automaticamente

        React sendo reativo
*/
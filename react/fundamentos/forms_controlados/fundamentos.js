/*
    Aqui é onde o React é transformado em algo podereso de verdade

    O que é um form controlado?
    -> É quando o input é controlado pelo estado

    Ou seja:
        input -> estado -> tela
*/

// Exemplo básico
import { useState } from "react";

function Formulario() {
    const [nome, setNome] = useState('');

    return (
        <div>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <p>Nome: {nome}</p>
        </div>
    );
}

/*
    O que está acontecendo?
        value={nome}
        -> o input depende do estado

        onChange={(e) => setNome(e.target.value)}
        -> atualiza o estado

    DIFERENÇA IMPORTANTE
        Input normal (não controlado)
            <input type="text" />
            -> React não controla

        Input controlado
            <input value={nome} onChange={...} />
            -> React controla tudo

    FLUXO COMPLETO
        1. Usuário digita
        2. onChange dispara
        3. setNome atualiza
        4. React re-renderiza
        5. value atualiza o input

        -> ciclo fechado

---------------------------------------------------------------------------

    Próximo nível (múltiplos campos)
        const [form, setForm] = useState({
            nome: '',
            email: '',
        });

        <input
            name="nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        Aqui emtra um conceito MUITO importante
            { ...form }
             -> isso é spread operator
             -> mantém os outros campos intactos

        ERRO COMUM
            setForm({ nome: 'Felipe' });
            -> isso apaga o resto do estado

    RESUMO FINAL
        Conceito        Ideia
        -------------------------------------
        value           estado controla input
        -------------------------------------
        onChange        atualiza estado
        -------------------------------------
        onSubmit        controla envio
        -------------------------------------
        preventDefault  evita reload

*/
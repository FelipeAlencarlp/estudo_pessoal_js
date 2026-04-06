import { useState, useEffect } from "react";
import { useUsuariosQuery } from "../../hooks/useUsuariosQuery";
import { useUsuariosMutation } from "../../hooks/useUsuariosMutation";
import { useUsuarios } from "../../hooks/useUsuarios";

import styles from "./Formulario.module.css";

function Formulario() {
    const { usuarioEditando, setUsuarioEditando } = useUsuarios();

    const { data: usuarios } = useUsuariosQuery();
    const { create, update } = useUsuariosMutation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    
    useEffect(() => {
        if (usuarioEditando) {
            setNome(usuarioEditando.nome || '');
            setEmail(usuarioEditando.email || '');
            setTelefone(usuarioEditando.telefone || '');
        }
    }, [usuarioEditando]);

    function handleSubmit(e) {
        e.preventDefault();

        const emailDuplicado = usuarios.some(
            (u) =>
                u.email === email &&
                (!usuarioEditando || u.id !== usuarioEditando.id)
        );

        if (emailDuplicado) {
            setErroEmail('Este e-mail já está em uso!');
            return;
        }

        let valido = true;

        if (!nome.trim()) {
            setErroNome('Nome é obrigatório');
            valido = false;
        } else if (nome.length < 3) {
            setErroNome('Nome deve ter pelo menos 3 caracteres');
            valido = false;
        } else {
            setErroNome('');
        }

        if (!email.trim()) {
            setErroEmail('E-mail é obrigatório');
            valido = false;
        } else if (!email.includes('@')) {
            setErroEmail('E-mail inválido');
            valido = false;
        } else {
            setErroEmail('');
        }

        if (!valido) return;

        const payload = {
            id: usuarioEditando?.id ?? Date.now(),
            nome,
            email,
            telefone
        };

        if (usuarioEditando) {
            update.mutate(payload);
        } else {
            create.mutate(payload);
        }

        setNome('');
        setEmail('');
        setTelefone('');
        setUsuarioEditando(null);
    }

    return (
        <div>
            <h2 className={styles.titulo}>
                { usuarioEditando ? 'Editar Usuário' : 'Cadastrar Usuário' }
            </h2>
            
            <form
                onSubmit={handleSubmit}
                className={styles.container}
            >
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Digite seu nome"
                    title="Digite seu nome"
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value);
                        setErroNome('');
                    }}
                />

                {erroNome && <p className={styles.erro}>{erroNome}</p>}

                <input
                    type="email"
                    title="Digite seu e-mail"
                    className={styles.input}
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErroEmail('');
                    }}
                />

                {erroEmail && <p className={styles.erro}>{erroEmail}</p>}

                <input
                    type="text"
                    title="Digite seu telefone"
                    className={styles.input}
                    placeholder="(99) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                
                <button
                    type="submit"
                    className={styles.botao}
                    title="Salvar edição"
                >
                    {usuarioEditando ? 'Salvar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default Formulario;
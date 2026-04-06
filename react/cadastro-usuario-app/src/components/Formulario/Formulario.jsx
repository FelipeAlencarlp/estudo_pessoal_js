import { useState, useEffect } from "react";
import { useUsuarios } from "../../hooks/useUsuarios";

import styles from "./Formulario.module.css";

function Formulario() {
    const {
        cadastrarUsuario,
        editarUsuario,
        usuarioEditando,
        emailExiste
    } = useUsuarios();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    
    useEffect(() => {
        if (usuarioEditando) {
            setNome(usuarioEditando.nome);
            setEmail(usuarioEditando.email);
        }
    }, [usuarioEditando]);

    function handleSubmit(e) {
        e.preventDefault();

        if (
            emailExiste(email) &&
            (!usuarioEditando || email !== usuarioEditando.email)
        ) {
            setErroEmail('Este e-mail já está em uso!');
            return
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

        if (usuarioEditando) {
            editarUsuario(usuarioEditando.id, nome, email);
        } else {
            cadastrarUsuario(nome, email);
        }

        setNome('');
        setEmail('');
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
                
                {usuarioEditando ? (
                    <>
                        <button
                            type="submit"
                            className={styles.botao}
                            title="Salvar edição"
                        >
                            Salvar
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="submit"
                            className={styles.botao}
                            title="Cadastrar usuário"
                        >
                            Cadastrar
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}

export default Formulario;
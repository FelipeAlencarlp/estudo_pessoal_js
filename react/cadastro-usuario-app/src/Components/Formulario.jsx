import { useState, useEffect } from "react";

function Formulario({ cadastrarUsuario, editarUsuario, usuarioEditando }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        if (usuarioEditando) {
            setNome(usuarioEditando.nome);
            setEmail(usuarioEditando.email);
        }
    }, [usuarioEditando]);

    function handleSubmit(e) {
        e.preventDefault();

        if (!nome.trim() || !email.trim()) {
            return alert('Os campos não podem ficar em branco');
        }

        if (nome.length < 3) {
            return alert('O nome precisa ter 3 ou mais caracteres');
        }

        if (usuarioEditando) {
            editarUsuario(usuarioEditando.id, nome, email);
            
        } else {
            cadastrarUsuario(nome, email);
        }

        setNome('');
        setEmail('');
    }

    return (
        <div style={{ placeItems: 'center' }}>
            <h2 style={{ marginTop: 20 }}>
                { usuarioEditando ? 'Editar Usuário' : 'Cadastrar Usuário' }
            </h2>
            <form
                onSubmit={handleSubmit}
                style={
                    { 
                        display: 'flex',
                        flexDirection: 'column',
                        width: 350,
                        marginTop: 20,
                        gap: 5
                    }
                }
            >
                {usuarioEditando ? (
                    <>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            title="Salvar edição"
                        >
                            Salvar
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
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
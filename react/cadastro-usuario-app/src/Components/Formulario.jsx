import { useState } from "react";

function Formulario({ cadastrarUsuario }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!nome.trim() || !email.trim()) {
            return alert('Os campos não podem ficar em branco');
        }

        if (nome.length < 3) {
            return alert('O nome precisa ter 3 ou mais caracteres');
        }

        cadastrarUsuario(nome, email);
        setNome('');
        setEmail('');
    }

    return (
        <div style={{ placeItems: 'center' }}>
            <h2 style={{ marginTop: 20 }}>Cadastro de Usuários</h2>

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
            </form>
        </div>
    );
}

export default Formulario;
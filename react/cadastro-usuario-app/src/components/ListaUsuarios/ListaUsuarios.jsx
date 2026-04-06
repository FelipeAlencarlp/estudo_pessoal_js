import { useUsuarios } from "../../hooks/useUsuarios";
import { useQuery } from "@tanstack/react-query";
import { getUsuarios } from "../../services/api";

import Item from "../Item/Item";
import styles from './ListaUsuarios.module.css';

function ListaUsuarios() {
    const { usuarios } = useUsuarios();

    const { data, isLoading, error } = useQuery({
        queryKey: ['usuarios'],
        queryFn: getUsuarios
    });

    if (isLoading) return <p>Carregando Usuários...</p>;

    if (error) return <p>Erro ao carregar</p>;

    return (
        <div className={styles.container}>
                <h3>Usuários Cadastrados</h3>

                {data.length > 0 ? (
                    <>
                        <table className={styles.tabela}>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((usuario) => (
                                    <Item
                                        key={usuario.id}
                                        usuario={usuario}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <>
                        <p>Nenhum usuário.</p>
                    </>
                )}
            </div>
    );
}

export default ListaUsuarios;
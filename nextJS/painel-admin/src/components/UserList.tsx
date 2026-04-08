"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/User";
import { getUsers, deleteUser } from "@/services/userService";

export default function UserList({ refetchRef }: any) {
    const [users, setUsers] = useState<User[]>([]);
    const [loadingId, setLoadingId] = useState<number | null>(null)
    
    async function fetchUsers() {
        const data = await getUsers();
        setUsers(data); 
    }

    useEffect(() => {
        fetchUsers();

        if (refetchRef) {
            refetchRef.current = fetchUsers;
        }
    }, []);

    return (
        <div className="flex flex-col">
            <p className="text-gray-500 text-xl mb-4 mt-10">Lista de Usuários</p>

            <table className="
                text-gray-900 mt-0 w-full
                m-auto border-collapse text-center
            ">
                <thead>
                    <tr className="bg-gray-600 text-white">
                        <th className="p-2">Nome</th>
                        <th className="p-2">E-mail</th>
                        <th className="p-2">Telefone</th>
                        <th className="p-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-b"
                        >
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.phone}</td>
                            <td className="p-2 w-46 gap-3">
                                <button
                                    title="Editar usuário"
                                    className="
                                        bg-green-500 text-white p-2
                                        rounded cursor-pointer mr-2
                                        hover:bg-green-600
                                    "
                                >
                                    Editar
                                </button>
                
                                <button
                                    title="Excluir usuário"
                                    className="
                                        bg-red-500 text-white p-2
                                        rounded cursor-pointer
                                        hover:bg-red-600
                                        disabled:opacity-50
                                    "
                                    disabled={loadingId === user.id}
                                    onClick={async () =>  {
                                        try {
                                            setLoadingId(user.id);

                                            await deleteUser(user.id);
                                            await fetchUsers();
                                        } catch (error) {
                                            alert('Erro ao deletar');
                                        } finally {
                                            setLoadingId(null);
                                        }
                                    }}
                                >
                                    {loadingId === user.id ? '...' : 'Excluir'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
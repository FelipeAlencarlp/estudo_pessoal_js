"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/User";
import { PropsToast } from "@/types/PropsToast";
import { getUsers, deleteUser, updateUser } from "@/services/userService";
import DeleteModal from "./DeleteModal";
import EditUserModal from "./EditUserModal";
import Toast from "./Toast";

export default function UserList({ refetchRef }: any) {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const [toast, setToast] = useState<PropsToast | null>(null);
    
    async function fetchUsers() {
        const data = await getUsers();
        setUsers(data); 
    }

    async function handleUpdate(name: string, email: string, phone: string) {
        if (!selectedUser) return null;

        await updateUser(selectedUser.id, name, email, phone);
        await fetchUsers();

        setIsEditOpen(false);
        setSelectedUser(null);
    }

    async function handleDelete() {
        if (!selectedUser) return;

        try {
            await deleteUser(selectedUser.id);
            await fetchUsers();

            setToast({ message: "Usuário deletado!", type: "success" });
        } catch {
            setToast({ message: "Erro ao deletar", type: "error" });
        }
        
        setIsModalOpen(false);
        setSelectedUser(null);
    }

    useEffect(() => {
        fetchUsers();

        if (refetchRef) {
            refetchRef.current = fetchUsers;
        }
    }, []);

    useEffect(() => {
        if (toast) {
            setTimeout(() => setToast(null), 2000);
        }
    }, [toast]);

    return (
        <div className="flex flex-col">
            {toast && <Toast message={toast.message} type={toast.type} />}

            <p className="text-gray-600 text-xl mb-4 mt-10">Lista de Usuários</p>

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
                            className="border-b text-gray-500"
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
                                        hover:bg-green-400
                                    "
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsEditOpen(true);
                                    }}
                                >
                                    Editar
                                </button>
                
                                <button
                                    title="Excluir usuário"
                                    className="
                                        bg-red-500 text-white p-2
                                        rounded cursor-pointer
                                        hover:bg-red-400
                                    "
                                    onClick={() =>  {
                                        setSelectedUser(user);
                                        setIsModalOpen(true);
                                    }}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <EditUserModal
                user={selectedUser}
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                onConfirm={handleUpdate}
            />

            <DeleteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                name={selectedUser?.name}
            />
        </div>
    );
}
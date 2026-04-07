"use client";

import { useEffect, useState } from "react";

export default function DashboardClient() {
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("/api/users");
            const data = await response.json();

            setUsers(data);
            setLoading(false);
        }

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <h1>Dashboard CSR</h1>

            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
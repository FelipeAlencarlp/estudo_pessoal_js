"use client";

import { useRef } from "react";
import CreateUser from "@/components/CreateUser";
import UserList from "@/components/UserList";

export default function UsersPage() {
    const listRef = useRef<any>(null);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Usuários</h1>

            <CreateUser onUserCreated={() => listRef.current()}/>

            <UserList refetchRef={listRef}/>
        </div>
    );
}
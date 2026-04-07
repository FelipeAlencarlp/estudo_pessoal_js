import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        { id: 1, name: 'Felipe' },
        { id: 2, name: 'João' }
    ];

    return NextResponse.json(users);
}
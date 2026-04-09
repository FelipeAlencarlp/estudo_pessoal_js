import { NextResponse } from "next/server";

let users = [
    { id: 1, name: 'Felipe', email: 'felipe@email.com', phone: '51989129855' },
    { id: 2, name: 'Ana', email: 'ana@email.com', phone: '51989129855' },
];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const body = await request.json();

    const newUser = {
        id: users.length + 1,
        name: body.name,
        email: body.email,
        phone: body?.phone,
    };

    users.push(newUser);

    return NextResponse.json(newUser);
}

export async function PUT(request: Request) {
    const { id, name, email, phone } = await request.json();

    users = users.map((user) =>
        user.id === id ? { ...user, name, email, phone } : user
    );

    return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
    const { id } = await request.json();

    users = users.filter((user) => user.id !== id);

    return NextResponse.json({ success: true });
}
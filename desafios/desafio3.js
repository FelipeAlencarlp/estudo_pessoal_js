/*
    Filtro + paginação
    Objetivo:
        Criar uma função que simula um endpoint com listagem de usuários com:
            filtro por nome/email;
            paginação

        Use esse array:
            const users = [
                { id: 1, nome: "Felipe", email: "felipe@email.com", telefone: "1111" },
                { id: 2, nome: "João", email: "joao@email.com", telefone: "2222" },
                { id: 3, nome: "Maria", email: "maria@email.com", telefone: "3333" },
                { id: 4, nome: "Ana", email: "ana@email.com", telefone: "4444" },
                { id: 5, nome: "Carlos", email: "carlos@email.com", telefone: "5555" },
                { id: 6, nome: "Fernanda", email: "fernanda@email.com", telefone: "6666" },
            ];

        Crie a função:
            function getUsers({ search, page, limit }) {}

        1. Filtro (search)
            Se search existir:
                filtrar por nome OU email
                case insensitive

        2. Paginação
            Use:
                page = 1
                limit = 2

            const start = (page - 1) * limit;
            const end = start + limit;

        3. Retorno (PADRÃO BACKEND)
            return {
                success: true,
                data: usersFiltradosPaginados,
                total: totalDeRegistros,
                page,
                limit
            }

        Regras importantes
            Não mutar o array original
            Sempre retornar total antes da paginação
            Se não tiver search, retorna todos
*/

const users = [
    { id: 1, nome: "Felipe", email: "felipe@gmail.com", telefone: "1111" },
    { id: 2, nome: "João", email: "joao@email.com", telefone: "2222" },
    { id: 3, nome: "Maria", email: "maria@email.com", telefone: "3333" },
    { id: 4, nome: "Ana", email: "ana@email.com", telefone: "4444" },
    { id: 5, nome: "Carlos", email: "carlos@email.com", telefone: "5555" },
    { id: 6, nome: "Fernanda", email: "fernanda@email.com", telefone: "6666" },
];

function getUsers({ search, page = 1, limit = 10 }) {
    const start = (page - 1) * limit;
    const end = start + limit;

    let filtered = [...users];

    // busca
    if (search) {
        const busca = search.toLowerCase();

        filtered = filtered.filter(user => 
            user.nome.toLowerCase().includes(busca) ||
            user.email.toLowerCase().includes(busca)
        );
    }

    // ordenação
    filtered = filtered.sort((a, b) =>
        a.nome.localeCompare(b.nome)
    );

    const total = filtered.length;

    // paginação
    const paginated = filtered.slice(start, end);

    return {
        success: true,
        data: paginated,
        total,
        page,
        limit
    };
}

console.log(getUsers({ search: "", page: 1, limit: 2 }));
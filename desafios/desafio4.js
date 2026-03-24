/*
    Implementar multiplos filtros

    getUsers({
        nome,
        email,
        telefone,
        page,
        limit,
        sortBy,
        order
    })

    Regras:
        Todos são opcionais
        se vier, aplica
        se não vier, ignora

        Filtro por nome
        Filtro por email
        Filtro por telefone

        Todos podem ser combinados
*/

const users = [
    { id: 1, nome: "Felipe", email: "felipe@gmail.com", telefone: "1111" },
    { id: 2, nome: "João", email: "joao@email.com", telefone: "2222" },
    { id: 3, nome: "Maria", email: "maria@gmail.com", telefone: "3333" },
    { id: 4, nome: "Ana", email: "ana@email.com", telefone: "4444" },
    { id: 5, nome: "Carlos", email: "carlos@email.com", telefone: "5555" },
    { id: 6, nome: "Fernanda", email: "fernanda@email.com", telefone: "6666" },
];

const toLower = value => value.toLowerCase();

function getUsers({
    nome,
    email,
    telefone,
    page = 1,
    limit = 10,
    sortBy = 'nome',
    order = 'asc'
}) {
    const start = (page - 1) * limit;
    const end = start + limit;

    let filtered = [...users];

    // filtros
    if (nome) {
        filtered = filtered.filter(user => 
            toLower(user.nome).includes(toLower(nome)) 
        );
    }

    if (email) {
        filtered = filtered.filter(user =>
            toLower(user.email).includes(toLower(email))
        );
    }

    if (telefone) {
        filtered = filtered.filter(user =>
            user.telefone.includes(telefone)
        );
    }

    // validação ordenação
    const allowedSort = ['nome', 'email', 'telefone'];
    if (!allowedSort.includes(sortBy)) {
        sortBy = 'nome';
    }

    const allowedOrder = ['asc', 'desc'];
    if (!allowedOrder.includes(order)) {
        order = 'asc';
    }

    // ordenação
    filtered.sort((a, b) => {
        if (order === 'asc') {
            return a[sortBy].localeCompare(b[sortBy]);
        } else {
            return b[sortBy].localeCompare(a[sortBy]);
        }
    });

    const total = filtered.length;

    // paginação
    const paginated = filtered.slice(start, end);

    return {
        success: true,
        data: paginated,
        total,
        page,
        limit,
        sortBy,
        order
    };
}

console.log(
    getUsers({
        nome: "fe",
        sortBy: 'nome',
        order: 'desc',
        page: 1,
        limit: 3
    }
));
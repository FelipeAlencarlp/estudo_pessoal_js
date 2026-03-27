const toLower = value => value.toLowerCase();

function getUsersService(query) {
    const {
        nome,
        email,
        telefone,
        page = 1,
        limit = 10,
        sortBy = 'nome',
        order = 'asc'
    } = query;

    let filtered = [...users];

    if (page <= 0 || limit <= 0) {
        throw new Error('Page e limit devem ser maiores que 0');
    }

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

    // ordenação
    const allowedSort = ['nome', 'email', 'telefone'];
    const allowedOrder = ['asc', 'desc'];

    const finalSort = allowedSort.includes(sortBy) ? sortBy : 'nome';
    const finalOrder = allowedOrder.includes(order) ? order : 'asc';

    filtered.sort((a, b) => {
        if (finalOrder === 'asc') {
            return a[finalSort].localeCompare(b[finalSort]);
        } else {
            return b[finalSort].localeCompare(a[finalSort]);
        }
    });

    const total = filtered.length;

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    return {
        data: paginated,
        total,
        page,
        limit
    };
}

module.exports = { getUsersService };
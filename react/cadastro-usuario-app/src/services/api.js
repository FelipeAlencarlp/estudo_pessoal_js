export async function getUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, nome: 'Felipe', email: 'felipe@email.com', telefone: '51989129855' },
                { id: 2, nome: 'Ana', email: 'ana@email.com' }
            ]);
        }, 1000);
    });
}
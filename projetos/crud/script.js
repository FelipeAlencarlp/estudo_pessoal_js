const inputUsuario = document.querySelector('#inputUsuario');
const btnAdicionar = document.querySelector('#btnAdicionar');
const listaUsuarios = document.querySelector('#listaUsuarios');

// banco de dados simulado com array
let usuarios = [];

// função para renderizar usuário
function renderizarUsuarios() {
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';

        // excluir usuário
        botaoExcluir.addEventListener('click', () => {
            usuarios.splice(index, 1);
            // splice() -> remove o indice, com 1 quantidade

            renderizarUsuarios();
        });

        // editar usuário
        botaoEditar.addEventListener('click', () => {
            const novoNome = prompt('Digite o novo nome');

            usuarios[index] = novoNome;

            renderizarUsuarios();
        });

        li.textContent = usuario + ' ';
        
        li.appendChild(botaoExcluir);
        li.appendChild(botaoEditar);

        // listar usuário
        listaUsuarios.appendChild(li);
    });
}

// criar usuário
btnAdicionar.addEventListener('click', () => {
    const nome = inputUsuario.value;

    usuarios.push(nome);

    renderizarUsuarios();

    inputUsuario.value = '';
});